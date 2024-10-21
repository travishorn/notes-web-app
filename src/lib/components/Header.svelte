<script>
	export let user;
</script>

<header class="flex justify-between">
	<a class="flex gap-1 items-center font-semibold hover:text-gray-600" href="/">
		<img alt="Logo, an open boo" src="/book-open.svg" class="w-5 h-5" />
		Daily Journal
	</a>

	<div class="flex gap-6">
		{#if user}
			{user.emailAddress}
			<form method="post" action="/sign-out">
				<button class="font-semibold hover:text-gray-600">Sign out</button>
			</form>
		{:else}
			<a class="font-semibold hover:text-gray-600" href="/sign-in">Sign in</a>
			<a class="font-semibold hover:text-gray-600" href="/sign-up">Sign up</a>
		{/if}
	</div>
</header>
