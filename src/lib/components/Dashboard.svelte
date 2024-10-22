<script>
	export let listNotes;
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
	<div class="p-8 overflow-y-auto h[calc(100vh-115px)]">
		<slot />
	</div>
</div>
