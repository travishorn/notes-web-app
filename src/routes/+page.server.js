import db from '$lib/server/db.js';

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

		return { listEntries };
	}

	return;
}
