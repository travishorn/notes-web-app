import db from '$lib/server/db.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const dbNotes = await db.raw(
		`
		SELECT
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
