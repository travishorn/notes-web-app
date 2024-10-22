/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
	await knex.raw('DELETE FROM Note;');
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
    INSERT INTO Note (id, userId, createdAt, updatedAt, title, content) VALUES
    ('77fb7d2e-7325-4cb5-a85b-c9ba25ea73e2', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-06T19:00:00Z', '2024-10-06T19:00:00Z', 'Grocery List', 'Buy milk, eggs, and bread for the weekend.'),
    ('4dfc602b-73b1-4145-a29b-bc5885bdf2f1', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-07T19:00:00Z', '2024-10-07T19:00:00Z', 'Meeting Reminder', 'Team meeting on Tuesday at 10 AM via Zoom.'),
    ('f3488bab-0184-4282-ace4-772215dab560', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-08T19:00:00Z', '2024-10-08T19:00:00Z', 'Workout Plan', 'Do a 30-minute cardio session and strength training tomorrow.'),
    ('6d0d6629-1a21-460d-b4ee-4eced92d38f2', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-09T19:00:00Z', '2024-10-09T19:00:00Z', 'Book Recommendation', 'Check out ''Atomic Habits'' by James Clear.'),
    ('dc7603a0-4ac6-4924-8a5d-4cceb2b3d174', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-10T19:00:00Z', '2024-10-10T19:00:00Z', 'Call Mom', 'Give Mom a call on Thursday evening to check in.'),
    ('b73ab218-bb40-42ee-a165-8bbd091d7a65', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-11T19:00:00Z', '2024-10-11T19:00:00Z', 'Project Deadline', 'Submit the final report by Friday at 5 PM.'),
    ('2feced15-fbf3-4c1b-b0b5-4d44621ad2ba', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-12T19:00:00Z', '2024-10-12T19:00:00Z', 'Travel Plans', 'Book flights and accommodation for the trip to Italy.'),
    ('62fb03b4-7626-4b6e-8335-f9927b51a43c', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-13T19:00:00Z', '2024-10-13T19:00:00Z', 'Recipe to Try', 'Try making the chicken alfredo pasta from the new recipe blog.'),
    ('c7c07e39-5f3e-459c-b7f0-8edd19920f1f', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-14T19:00:00Z', '2024-10-14T19:00:00Z', 'Reminder to Meditate', 'Take 10 minutes each morning to meditate.'),
    ('ee57b608-3f1a-4a4b-b727-5035bb652bde', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-15T19:00:00Z', '2024-10-15T19:00:00Z', 'Pay Rent', 'Pay rent by the 1st of the month via online transfer.'),
    ('dff17032-fc18-4688-94a3-c3be2ab65b9c', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-16T19:00:00Z', '2024-10-16T19:00:00Z', 'Buy Gift', 'Pick up a birthday gift for Sarah''s party next weekend.'),
    ('3196839d-5a21-4bd6-9019-e47ea098289c', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-17T19:00:00Z', '2024-10-17T19:00:00Z', 'Dentist Appointment', 'Don''t forget about the dentist appointment on Monday at 2 PM.'),
    ('27b44cb4-ca13-4b2b-a434-089c17332d16', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-18T19:00:00Z', '2024-10-18T19:00:00Z', 'Read More', 'Finish reading ''Sapiens'' by the end of the month.'),
    ('d365e072-8044-4835-9d8b-25dbaf139351', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-19T19:00:00Z', '2024-10-19T19:00:00Z', 'Car Maintenance', 'Schedule an oil change for the car this Saturday.'),
    ('de1dda7f-ef7b-4fd7-8773-1702f22de388', '7918fdaf-5a64-4e5f-9e9a-a1e96d64058f', '2024-10-20T19:00:00Z', '2024-10-20T19:00:00Z', 'Code Review', 'Review John''s pull request by tomorrow afternoon.');
  `);
}
