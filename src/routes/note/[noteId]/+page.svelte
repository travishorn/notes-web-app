<script>
	import { PUBLIC_SITE_TITLE } from '$env/static/public';
	import NoteView from '$lib/components/NoteView.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.note.title} | {PUBLIC_SITE_TITLE}</title>
</svelte:head>

<NoteView listNotes={data.listNotes} note={data.note} />
