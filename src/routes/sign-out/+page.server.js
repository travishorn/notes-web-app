import { redirect } from '@sveltejs/kit';
import db from '$lib/server/db.js';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies }) => {
		const sessionId = cookies.get('dailyJournal-sessionId');

		if (sessionId) {
			await db.raw(
				`
        DELETE FROM
          Session
        WHERE
          id = :sessionId
      `,
				{ sessionId }
			);

			cookies.delete('dailyJournal-sessionId', { path: '/' });
		}

		redirect(303, '/');
	}
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	redirect(303, '/');
}
