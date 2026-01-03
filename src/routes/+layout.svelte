<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->

	<link rel="stylesheet" href="https://use.typekit.net/cfe6wef.css">
	<link rel="stylesheet" href="https://use.typekit.net/cfe6wef.css">
</svelte:head>

{@render children?.()}
