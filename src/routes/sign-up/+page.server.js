import { randomUUID } from 'node:crypto';
import { fail, redirect } from '@sveltejs/kit';
import db from '$lib/server/db.js';
import { hash } from 'argon2';

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
		const retypePassword = String(data.get('retypePassword'));

		const users = await db.raw(
			`
      SELECT
        u.id
      FROM
        User u
      WHERE
        u.emailAddress = :emailAddress
      LIMIT 1;
    `,
			{ emailAddress }
		);

		if (users.length > 0) {
			return fail(400, {
				emailAddress,
				error: 'The email you entered is already in use.'
			});
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
			return fail(400, {
				emailAddress,
				error: 'The email you entered is not valid.'
			});
		}

		if (password.length < 8) {
			return fail(400, {
				emailAddress,
				error: 'Your password must be 8 characters or more.'
			});
		}

		if (password !== retypePassword) {
			return fail(400, {
				emailAddress,
				error: 'The passwords you entered do not match.'
			});
		}

		const userId = randomUUID();
		const passwordHash = await hash(password);

		await db.raw(
			`
			INSERT INTO User (
				id,
				emailAddress,
				passwordHash
			) VALUES (
				:userId,
				:emailAddress,
				:passwordHash
			)
		`,
			{
				userId,
				emailAddress,
				passwordHash
			}
		);

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
				userId,
				expiresAt: oneMonthFromNow.toISOString()
			}
		);

		cookies.set('dailyJournal-sessionId', sessionId, { path: '/', expires: oneMonthFromNow });

		return redirect(303, '/');
	}
};
