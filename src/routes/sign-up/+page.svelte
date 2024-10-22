<script>
	import { PUBLIC_SITE_TITLE } from '$env/static/public';
	import Button from '$lib/components/Button.svelte';
	import { generateEncryptionKeyMaterial } from '$lib';

	/** @type {import('./$types').ActionData} */
	export let form;

	let password = 'password';

	/** @type {App.EncryptionKeyMaterial} */
	let masterEncryptionKeyMaterial;

	$: {
		generateEncryptionKeyMaterial(password).then(
			(/** @type {App.EncryptionKeyMaterial} */ generatedKey) => {
				masterEncryptionKeyMaterial = generatedKey;
			}
		);
	}
</script>

<svelte:head>
	<title>Sign Up | {PUBLIC_SITE_TITLE}</title>
</svelte:head>

<form class="flex flex-col gap-6 max-w-md mx-auto" method="post">
	{#if form?.error}
		<div class="bg-red-200 text-red-800 rounded p-2">{form.error}</div>
	{/if}

	<div class="flex flex-col">
		<label for="emailAddress">Email</label>
		<input
			id="emailAddress"
			name="emailAddress"
			class="border border-gray-300 p-2"
			type="text"
			required
			value={form?.emailAddress ?? 'user2@example.com'}
		/>
	</div>

	<div class="flex flex-col">
		<label for="password">Password</label>
		<input
			id="password"
			name="password"
			class="border border-gray-300 p-2"
			type="password"
			minlength="8"
			required
			bind:value={password}
		/>
	</div>

	<div class="flex flex-col">
		<label for="retypePassword">Retype password</label>
		<input
			id="retypePassword"
			name="retypePassword"
			class="border border-gray-300 p-2"
			type="password"
			minlength="8"
			required
			bind:value={password}
		/>
	</div>

	{#if masterEncryptionKeyMaterial}
		<input type="hidden" name="masterEncryptionKeyIv" value={masterEncryptionKeyMaterial.iv} />
		<input
			type="hidden"
			name="encryptedMasterEncryptionKey"
			value={masterEncryptionKeyMaterial.encryptedKey}
		/>
	{/if}

	<div>
		<Button>Sign up</Button>
	</div>
</form>
