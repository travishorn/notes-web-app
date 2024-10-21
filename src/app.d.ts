// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		interface User {
			id: string;
			emailAddress: string;
		}

		interface Locals {
			user: User;
		}

		interface ListEntry {
			id: string;
			createdAt: string;
			contentSnippet: string;
		}

		interface Entry {
			id: string;
			createdAt: date;
			content: string;
		}
	}
}

export {};
