import { randomUUID } from 'node:crypto';
import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals }) => {
		if (!locals.user) {
			redirect(303, '/');
		} else {
			const entryId = randomUUID();

			await db.raw(
				`
        INSERT INTO Entry (
          id,
          userId,
					createdAt
        ) VALUES (
          :entryId,
          :userId,
					:createdAt
        );
      `,
				{
					entryId,
					userId: locals.user.id,
					createdAt: new Date().toISOString()
				}
			);

			redirect(303, `/entry/${entryId}`);
		}
	}
};
