<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<svelte:head>
	<title>Daily Journal</title>
</svelte:head>

<div class="flex flex-col gap-6 container mx-auto px-8 py-16">
	<Header user={data.user} />

	<main>
		<slot />
	</main>
</div>
