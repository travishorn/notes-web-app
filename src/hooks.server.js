import db from '$lib/server/db.js';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const sessionId = event.cookies.get('dailyJournal-sessionId');

	if (sessionId) {
		const users = await db.raw(
			`
      SELECT
				u.id,
        u.emailAddress
      FROM
        Session s
      JOIN
        User u ON u.id = s.userId
      WHERE
            s.id = :sessionId
        AND s.expiresAt > CURRENT_TIMESTAMP
      LIMIT 1; 
    `,
			{ sessionId }
		);

		if (users.length > 0) {
			event.locals.user = users[0];
		}
	}

	const response = await resolve(event);
	return response;
}
