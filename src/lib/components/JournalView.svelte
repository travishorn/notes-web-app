<script>
	import Button from './Button.svelte';

	export let listEntries;

	/** @type {App.Entry|null} */
	export let entry = null;
</script>

<div class="flex h-full">
	<!-- Sidebar -->
	<aside class="w-1/5 border-r border-gray-200">
		<div class="flex flex-col overflow-y-auto h-[calc(100vh-115px)]">
			{#each listEntries as listEntry}
				<a class="px-2 py-3 hover:bg-gray-100" href={`/entry/${listEntry.id}`}>
					<div class="font-semibold">{listEntry.createdAt.toLocaleDateString()}</div>
					<div class="text-sm text-gray-500 truncate">{listEntry.contentSnippet ?? ''}</div>
				</a>
			{/each}
		</div>
	</aside>

	<!-- Content -->
	<article class="p-8 overflow-y-auto h[calc(100vh-115px)]">
		{#if entry}
			<h2 class="text-3xl font-bold mb-4">{entry.createdAt.toLocaleDateString()}</h2>
			<p class="whitespace-pre-wrap">{entry.content}</p>
		{:else}
			<div class="flex gap-2">
				Ready for today's entry?
				<form method="post" action="/entry/new">
					<Button>Start writing!</Button>
				</form>
			</div>
		{/if}
	</article>
</div>
