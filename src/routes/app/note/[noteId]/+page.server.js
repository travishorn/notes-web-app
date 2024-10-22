import db from '$lib/server/db.js';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const dbNotes = await db.raw(
		`
		SELECT
			n.id,
			n.title,
			n.content
		FROM
			Note n
		WHERE
					n.id = :noteId
			AND n.userId = :userId
		LIMIT 1;
	`,
		{
			noteId: params.noteId,
			userId: locals.user.id
		}
	);

	if (dbNotes.length === 0) {
		error(404);
	}

	return { note: dbNotes[0] };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, params, request }) => {
		const data = await request.formData();
		const title = String(data.get('title'));
		const content = String(data.get('content'));

		await db.raw(
			`
      UPDATE
				Note
			SET
				title = :title,
				content = :content,
				updatedAt = CURRENT_TIMESTAMP
			WHERE
				id = :id
				AND userId = :userId;
    `,
			{
				id: params.noteId,
				userId: locals.user.id,
				title,
				content
			}
		);

		return redirect(303, '/app');
	}
};
