<script>
	import NoteEditor from '$lib/components/NoteEditor.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<NoteEditor note={data.note} />
