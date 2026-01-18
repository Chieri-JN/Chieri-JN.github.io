<script>
	import favicon from '$lib/assets/favicon.svg';
	import site from '$lib/assets/Site-01.svg';
	import Site2 from '$lib/assets/Site-02.svg';

	let { children } = $props();
	import '../app.css';
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<link rel="icon" href={site} />
	<link rel="stylesheet" href="https://use.typekit.net/cfe6wef.css">
	<link rel="stylesheet" href="https://use.typekit.net/cfe6wef.css">
</svelte:head>

<div class="page">
	<header>
		<!-- <img src={site} alt="Chieri JN" /> -->
		<h1>CHIERI-JN</h1>
	</header>

	<main>
		{@render children?.()}
	</main>

	<footer>
		<p>Fonts used: <a class = "affigere" href="https://xcicero.esad-gv.net/page/affigere/" target="_blank"> Affigere Regular </a> and <a class = "neue-haas" href="https://fonts.adobe.com/fonts/neue-haas-grotesk" target="_blank"> Neue Haas Grotesk Display </a></p>
	</footer>
</div>

<style>
	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
	}

	footer {
		text-align: center;
		padding: 1rem 0;
	}

	header {
		width: 100%;
		text-align: center;
	}

	main {
		flex: 1;
	}

	footer {
		text-align: center;
		padding: 1rem 0;
	}

	.affigere {
		font-family: var(--title-font);
		font-size: 1.3em;
	}

	.neue-haas {
		font-family: var(--text-font);
	}

</style>