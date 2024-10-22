<script>
	import { PUBLIC_SITE_TITLE } from '$env/static/public';
	import Dashboard from '$lib/components/Dashboard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>New Note | {PUBLIC_SITE_TITLE}</title>
</svelte:head>

<Dashboard listNotes={data.listNotes}>(New note form goes here.)</Dashboard>
