<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="flex h-full">
	<!-- Sidebar -->
	<aside class="w-1/5 border-r border-gray-200">
		<div class="flex flex-col overflow-y-auto h-[calc(100vh-115px)]">
			<a
				class="border border-gray-200 mr-3 mb-3 px-2 py-3 hover:bg-gray-100 font-semibold text-center"
				href={`/app/note/new`}
			>
				+ Create a new note
			</a>

			{#each data.listNotes as listNote}
				<a class="px-2 py-3 hover:bg-gray-100" href={`/app/note/${listNote.id}`}>
					<div class="font-semibold">{listNote.title}</div>
					<div class="text-sm text-gray-500 truncate">{listNote.contentSnippet ?? ''}</div>
				</a>
			{/each}
		</div>
	</aside>

	<!-- Content -->
	<div class="p-8 overflow-y-auto h-[calc(100vh-115px)] w-full">
		<slot />
	</div>
</div>
