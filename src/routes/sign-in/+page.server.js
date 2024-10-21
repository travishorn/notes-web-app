import { randomUUID } from 'node:crypto';
import { fail, redirect } from '@sveltejs/kit';
import db from '$lib/server/db.js';
import { verify } from 'argon2';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) {
		redirect(303, '/');
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const emailAddress = String(data.get('emailAddress'));
		const password = String(data.get('password'));

		const users = await db.raw(
			`
      SELECT
        u.id,
        u.passwordHash
      FROM
        User u
      WHERE
        u.emailAddress = :emailAddress
      LIMIT 1;
    `,
			{ emailAddress }
		);

		if (users.length === 0) {
			return fail(400, {
				emailAddress,
				error: 'The email and/or password you entered is not correct.'
			});
		}

		const user = users[0];
		const passwordVerified = await verify(user.passwordHash, password);

		if (!passwordVerified) {
			return fail(400, {
				emailAddress,
				error: 'The email and/or password you entered is not correct.'
			});
		}

		const sessionId = randomUUID();
		const oneMonthFromNow = new Date();
		oneMonthFromNow.setMonth(new Date().getMonth() + 1);

		await db.raw(
			`
      INSERT INTO Session (
        id,
        userId,
        expiresAt
      ) VALUES (
        :sessionId,
        :userId,
        :expiresAt 
      );
    `,
			{
				sessionId,
				userId: user.id,
				expiresAt: oneMonthFromNow.toISOString()
			}
		);

		cookies.set('dailyJournal-sessionId', sessionId, { path: '/', expires: oneMonthFromNow });

		return redirect(303, '/');
	}
};
