import { redirect } from '@sveltejs/kit';
import db from '$lib/server/db.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
	if (!locals.user) {
		return redirect(303, '/');
	}

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
