import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
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

		return { listNotes };
	}
}
