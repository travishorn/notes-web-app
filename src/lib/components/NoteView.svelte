<script>
	import Button from './Button.svelte';

	export let listNotes;

	/** @type {App.Note|null} */
	export let note = null;
</script>

<div class="flex h-full">
	<!-- Sidebar -->
	<aside class="w-1/5 border-r border-gray-200">
		<div class="flex flex-col overflow-y-auto h-[calc(100vh-115px)]">
			{#each listNotes as listNote}
				<a class="px-2 py-3 hover:bg-gray-100" href={`/note/${listNote.id}`}>
					<div class="font-semibold">{listNote.title}</div>
					<div class="text-sm text-gray-500 truncate">{listNote.contentSnippet ?? ''}</div>
				</a>
			{/each}
		</div>
	</aside>

	<!-- Content -->
	<article class="p-8 overflow-y-auto h[calc(100vh-115px)]">
		{#if note}
			<h2 class="text-3xl font-bold mb-4">{note.title}</h2>
			<p class="whitespace-pre-wrap">{note.content}</p>
		{:else}
			<div class="flex gap-2">
				<form method="post" action="/note/new">
					<Button>Create a new note</Button>
				</form>
			</div>
		{/if}
	</article>
</div>
