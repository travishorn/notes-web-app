<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="flex flex-col gap-6 container mx-auto px-8 pt-16">
	<Header user={data.user} />

	<main>
		<slot />
	</main>
</div>
