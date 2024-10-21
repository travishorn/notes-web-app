/** @type { Object.<string, import("knex").Knex.Config> } */
export default {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './db.sqlite3'
		},
		useNullAsDefault: true
	},
	production: {
		client: 'sqlite3',
		connection: {
			filename: './db.sqlite3'
		},
		useNullAsDefault: true
	}
};
