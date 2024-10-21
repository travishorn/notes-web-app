import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	if (!locals.user) {
		redirect(303, '/');
	} else {
		const dbListEntries = await db.raw(
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

		const listEntries = dbListEntries.map((/** @type {App.ListEntry} */ listEntry) => {
			return {
				...listEntry,
				createdAt: new Date(listEntry.createdAt)
			};
		});

		const dbEntries = await db.raw(
			`
			SELECT
				e.createdAt,
				e.content
			FROM
				Entry e
			WHERE
						e.id = :entryId
				AND e.userId = :userId
			LIMIT 1;
		`,
			{
				entryId: params.entryId,
				userId: locals.user.id
			}
		);

		if (dbEntries.length === 0) {
			redirect(303, '/');
		} else {
			const entry = {
				...dbEntries[0],
				createdAt: new Date(dbEntries[0].createdAt)
			};

			return { listEntries, entry };
		}
	}
}
