<script>
	import { PUBLIC_SITE_TITLE } from '$env/static/public';
	import Button from '$lib/components/Button.svelte';
	import PencilIcon from '$lib/icons/PencilIcon.svelte';
</script>

<svelte:head>
	<title>{PUBLIC_SITE_TITLE}</title>
</svelte:head>

<Button href="/app/note/new">
	<div class="flex items-center gap-1">
		<PencilIcon class="w-5 h-5" />
		Create a new note
	</div>
</Button>
