import { randomUUID } from 'node:crypto';
import { redirect } from '@sveltejs/kit';
import db from '$lib/server/db.js';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();
		const title = String(data.get('title'));
		const content = String(data.get('content'));

		await db.raw(
			`
      INSERT INTO Note (
        id,
        userId,
				title,
				content
      ) VALUES (
        :id,
        :userId,
				:title,
				:content
      );
    `,
			{
				id: randomUUID(),
				userId: locals.user.id,
				title,
				content
			}
		);

		return redirect(303, '/app');
	}
};
