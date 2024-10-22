// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		interface EncryptionKeyMaterial {
			iv: string;
			encryptedKey: string;
		}

		interface User {
			id: string;
			emailAddress: string;
		}

		interface Locals {
			user: User;
		}

		interface ListNote {
			id: string;
			title: string;
			contentSnippet: string;
		}

		interface Note {
			id: string;
			title: string;
			content: string;
		}
	}
}

export {};
