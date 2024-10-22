<script>
	import { PUBLIC_SITE_TITLE } from '$env/static/public';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>{PUBLIC_SITE_TITLE}</title>
</svelte:head>

<div class="flex flex-col gap-6 py-20 text-center">
	<p class="text-6xl font-bold tracking-tighter">Capture Your Thoughts, One Note at a Time</p>

	<p class="text-xl text-gray-700">Build good habits, stay organized, and remember what matters</p>

	<Button href="/sign-up">Get Started</Button>
</div>
