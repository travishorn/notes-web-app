import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	if (!locals.user) {
		redirect(303, '/');
	} else {
		const listNotes = await db.raw(
			`
      SELECT
				n.id,
        n.title,
        SUBSTR(n.content, 1, 50) contentSnippet
      FROM
        Note n
      WHERE
        n.userId = :userId
      ORDER BY
        n.createdAt DESC;
    `,
			{ userId: locals.user.id }
		);

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
			redirect(303, '/');
		} else {
			const note = dbNotes[0];

			return { listNotes, note };
		}
	}
}
