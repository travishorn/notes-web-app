/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
	await knex.raw(`DELETE FROM Session;`);
	await knex.raw(`DELETE FROM User;`);

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
}
