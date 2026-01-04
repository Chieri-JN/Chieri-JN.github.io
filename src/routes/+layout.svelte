<script>
	import favicon from '$lib/assets/favicon.svg';
	import site from '$lib/assets/Site-01.svg';
	import Site2 from '$lib/assets/Site-02.svg';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<link rel="icon" href={site} />
	<link rel="stylesheet" href="https://use.typekit.net/cfe6wef.css">
	<link rel="stylesheet" href="https://use.typekit.net/cfe6wef.css">
</svelte:head>

{@render children?.()}
