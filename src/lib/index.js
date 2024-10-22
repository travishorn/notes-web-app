import { browser } from '$app/environment';

/**
 * @param buffer {ArrayBuffer}
 * @returns {string}
 */
function arrayBufferToBase64(buffer) {
	let binary = '';
	const bytes = new Uint8Array(buffer);
	const len = bytes.byteLength;
	for (let i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
}

/**
 * @param {string} password
 * @returns {Promise<App.EncryptionKeyMaterial|null>}
 */
export async function generateEncryptionKeyMaterial(password) {
	if (!browser) return null;

	const masterEncryptionKey = window.crypto.getRandomValues(new Uint8Array(32));
	const masterEncryptionKeyIv = window.crypto.getRandomValues(new Uint8Array(12));
	const salt = window.crypto.getRandomValues(new Uint8Array(8));

	const baseKey = await window.crypto.subtle.importKey(
		'raw',
		new TextEncoder().encode(password),
		{ name: 'PBKDF2' },
		false,
		['deriveKey']
	);

	const passwordDerivedKey = await window.crypto.subtle.deriveKey(
		{
			name: 'PBKDF2',
			salt,
			iterations: 100000,
			hash: 'SHA-256'
		},
		baseKey,
		{ name: 'AES-GCM', length: 256 },
		false,
		['encrypt', 'decrypt']
	);

	const encryptedMasterEncryptionKey = await window.crypto.subtle.encrypt(
		{ name: 'AES-GCM', iv: masterEncryptionKeyIv },
		passwordDerivedKey,
		masterEncryptionKey
	);

	return {
		iv: arrayBufferToBase64(masterEncryptionKeyIv),
		encryptedKey: arrayBufferToBase64(encryptedMasterEncryptionKey),
		key: passwordDerivedKey
	};
}
