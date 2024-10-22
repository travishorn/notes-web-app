<script>
	import { PUBLIC_SITE_TITLE } from '$env/static/public';
	import BookOpenIcon from '$lib/icons/BookOpenIcon.svelte';
	import Button from './Button.svelte';

	export let user;
</script>

<header class="flex justify-between">
	<a class="flex gap-1 items-center font-semibold hover:text-gray-600" href="/">
		<BookOpenIcon class="w-5 h-5" />
		{PUBLIC_SITE_TITLE}
	</a>

	<div class="flex gap-6">
		{#if user}
			{user.emailAddress}
			<form method="post" action="/sign-out">
				<Button>Sign out</Button>
			</form>
		{:else}
			<Button href="/sign-in">Sign in</Button>
			<Button href="/sign-up">Sign up</Button>
		{/if}
	</div>
</header>
