<script>
	import { PUBLIC_SITE_TITLE } from '$env/static/public';
	import Button from '$lib/components/Button.svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import PencilIcon from '$lib/icons/PencilIcon.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{PUBLIC_SITE_TITLE}</title>
</svelte:head>

{#if data.user}
	<Dashboard listNotes={data.listNotes}>
		<Button href="/note/new">
			<div class="flex items-center gap-1">
				<PencilIcon class="w-5 h-5" />
				Create a new note
			</div>
		</Button>
	</Dashboard>
{:else}
	<LandingPage />
{/if}
