<script>
	import { beforeNavigate } from '$app/navigation';
	import { PUBLIC_SITE_TITLE } from '$env/static/public';
	import Button from '$lib/components/Button.svelte';

	export let note = {
		id: null,
		title: '',
		content: ''
	};

	let dirty = false;
	let isExplicitlyLeaving = false;

	beforeNavigate(({ cancel }) => {
		if (dirty && !isExplicitlyLeaving) {
			if (confirm('You have unsaved changes. Discard changes and leave this note?')) {
				dirty = false;
				isExplicitlyLeaving = false;
			} else {
				cancel();
			}
		}
	});
</script>

<svelte:head>
	<title>
		{note.title || (note.id ? 'Editing Note' : 'New Note')} | {PUBLIC_SITE_TITLE}
	</title>
</svelte:head>

<form class="flex flex-col gap-6" method="post" on:submit={() => (isExplicitlyLeaving = true)}>
	<input
		class="border-b border-gray-300 p-2 text-2xl"
		name="title"
		type="text"
		placeholder="Title"
		required
		bind:value={note.title}
		on:change={() => (dirty = true)}
	/>

	<textarea
		name="content"
		class="border border-gray-100 p-2 h-[calc(100vh-300px)]"
		placeholder="Start writing..."
		on:change={() => (dirty = true)}>{note.content}</textarea
	>

	<div class="flex gap-12">
		<Button>Save</Button>
	</div>
</form>
