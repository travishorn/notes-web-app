<script>
	import { PUBLIC_SITE_TITLE } from '$env/static/public';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.note.title} | {PUBLIC_SITE_TITLE}</title>
</svelte:head>

<h2 class="text-3xl font-bold mb-4">{data.note.title}</h2>
<p class="whitespace-pre-wrap">{data.note.content}</p>
