import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) {
		const dbEntries = await db.raw(
			`
      SELECT
				e.id,
        e.createdAt,
        SUBSTR(e.content, 1, 50) contentSnippet
      FROM
        Entry e
      WHERE
        e.userId = :userId
      ORDER BY
        e.createdAt DESC;
    `,
			{ userId: locals.user.id }
		);

		const listEntries = dbEntries.map((/** @type {App.ListEntry} */ entry) => {
			return {
				...entry,
				createdAt: new Date(entry.createdAt)
			};
		});

		const now = new Date().toISOString().slice(0, 10);
		const latest = listEntries[0].createdAt.toISOString().slice(0, 10);

		if (now === latest) {
			redirect(303, `/entry/${listEntries[0].id}`);
		}

		return { listEntries };
	}

	return;
}
