/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	await knex.raw(`
    CREATE TABLE User (
      id TEXT PRIMARY KEY,
      emailAddress TEXT NOT NULL UNIQUE,
      passwordHash TEXT NOT NULL
    );
  `);

	await knex.raw(`
    CREATE TABLE Session (
      id TEXT PRIMARY KEY,
      userId TEXT NOT NULL,
      expiresAt TEXT NOT NULL,
      FOREIGN KEY (userId) REFERENCES User(id)
    );
  `);

	await knex.raw(`
    CREATE TABLE Entry (
      id TEXT PRIMARY KEY,
      userId TEXT NOT NULL,
      createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      content TEXT,
      FOREIGN KEY (userId) REFERENCES User(id)
    );
  `);
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
	await knex.raw(`DROP TABLE Entry;`);
	await knex.raw(`DROP TABLE Session;`);
	await knex.raw(`DROP TABLE User;`);
}
