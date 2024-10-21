/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
	await knex.raw('DELETE FROM Entry;');
	await knex.raw('DELETE FROM Session;');
	await knex.raw('DELETE FROM User;');

	// Create sample user user@example.com:password
	await knex.raw(`
    INSERT INTO User (
      id,
      emailAddress,
      passwordHash
    ) VALUES (
      '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f',
      'user@example.com',
      '$argon2id$v=19$m=65536,t=3,p=4$bzD4gKIcMOkzwijViw8qSg$mQuBvS9sIQ7PnI3DJwtr1kJ4ei6XGuM9q9qx5aII3Gs'
    );
  `);

	await knex.raw(`
    INSERT INTO Entry (id, userId, createdAt, content) VALUES
    ('4dfc602b-73b1-4145-a29b-bc5885bdf2f1', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-07T19:00:00Z', 'Woke up feeling a bit sluggish today, but a strong cup of coffee got me moving.'),
    ('f3488bab-0184-4282-ace4-772215dab560', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-08T19:00:00Z', 'Today was surprisingly productive; I finally tackled that project I''ve been putting off.'),
    ('6d0d6629-1a21-460d-b4ee-4eced92d38f2', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-09T19:00:00Z', 'Spent most of the afternoon outside, and the fresh air was exactly what I needed.'),
    ('dc7603a0-4ac6-4924-8a5d-4cceb2b3d174', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-10T19:00:00Z', 'Had an insightful conversation with a friend that made me reflect on my priorities.'),
    ('b73ab218-bb40-42ee-a165-8bbd091d7a65', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-11T19:00:00Z', 'I didn''t accomplish everything I wanted to today, but I''m learning to be okay with that.'),
    ('2feced15-fbf3-4c1b-b0b5-4d44621ad2ba', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-12T19:00:00Z', 'I treated myself to a quiet evening with a good book, which was long overdue.'),
    ('62fb03b4-7626-4b6e-8335-f9927b51a43c', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-13T19:00:00Z', 'Work was challenging today, but I''m proud of how I handled the pressure.'),
    ('c7c07e39-5f3e-459c-b7f0-8edd19920f1f', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-14T19:00:00Z', 'It rained all day, and for once, I didn''t mind - it made everything feel calm.'),
    ('ee57b608-3f1a-4a4b-b727-5035bb652bde', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-15T19:00:00Z', 'Tried a new recipe tonight and it was a disaster, but at least I had fun cooking.'),
    ('dff17032-fc18-4688-94a3-c3be2ab65b9c', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-16T19:00:00Z', 'I noticed today how much progress I''ve made in my fitness routine, which felt really rewarding.'),
    ('3196839d-5a21-4bd6-9019-e47ea098289c', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-17T19:00:00Z', 'Spent the day organizing my space, and it feels like a fresh start.'),
    ('27b44cb4-ca13-4b2b-a434-089c17332d16', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-18T19:00:00Z', 'Had a moment of doubt today, but pushed through and ended up surprising myself.'),
    ('d365e072-8044-4835-9d8b-25dbaf139351', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-19T19:00:00Z', 'I spent some time reflecting on my goals, and realized I need to make some adjustments.'),
    ('de1dda7f-ef7b-4fd7-8773-1702f22de388', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-20T19:00:00Z', 'Took a spontaneous walk after dinner, and it was a nice way to clear my head.'),
    ('77fb7d2e-7325-4cb5-a85b-c9ba25ea73e2', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-21T19:00:00Z', 'Felt overwhelmed this morning, but taking a break helped me regain my focus.');
  `);
}
