<script>
	import JournalView from '$lib/components/JournalView.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.entry.createdAt.toLocaleDateString()} | Daily Journal</title>
</svelte:head>

<JournalView listEntries={data.listEntries} entry={data.entry} />
