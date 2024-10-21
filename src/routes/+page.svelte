<script>
	import JournalView from '$lib/components/JournalView.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Daily Journal</title>
</svelte:head>

{#if data.user}
	<JournalView listEntries={data.listEntries} />
{:else}
	<LandingPage />
{/if}
