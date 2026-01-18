<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import site from '$lib/assets/Site-01.svg';
	import Site2 from '$lib/assets/Site-02.svg';
	import { page } from '$app/stores';

	let { children } = $props();
	import '../app.css';


	let pages = [
		{ name: 'CJN', url: '.' },
		{ name: 'Projects', url: '/projects' },
		{ name: 'About', url: '/about' }, // inlcudes links to my socials
		{ name: 'CV', url: '/cv' },
		// { name: 'Contact', url: '/contact' },
	]

	function isActive(url: string) {
		if (url === '.') {
			return $page.url.pathname === '/';
		}
		return $page.url.pathname === url || $page.url.pathname.startsWith(url + '/');
	}
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<link rel="icon" href={site} />
	<link rel="stylesheet" href="https://use.typekit.net/cfe6wef.css">
	<link rel="stylesheet" href="https://use.typekit.net/cfe6wef.css">
</svelte:head>

<div class="page">
	
	<header>
		<nav class="nav">
			<!-- <h1 style="font-size: var(--subtitle-size);">CJN</h1> -->
			 <!-- <img src={site} alt="Chieri JN"/> -->
			<ul class="nav-list">
					{#each pages as page}
						{#if page.name !== 'CJN'}
							<li><a href={page.url} class={isActive(page.url) ? 'active' : ''}>{page.name}</a></li>
						{:else}
							<li><a href="." class="title" class:active={isActive('.')}>CJN</a></li>
						{/if}
					{/each}

				<!-- <div>
					<li><a href="." class="title" class:active={isActive('.')}>CJN</a></li>
				</div>
				<div>
					{#each pages as page}
					{#if page.name !== 'CJN'}
						<li><a href={page.url} class:active={isActive(page.url)}>{page.name}</a></li>
						{/if}
					{/each}
				</div>
		 -->
			</ul>
		</nav>
	</header>	



	<main>
		{@render children?.()}
	</main>

	<footer>
		<p>Typefaces used: <a class = "affigere" href="https://xcicero.esad-gv.net/page/affigere/" target="_blank"> Affigere Regular </a> and <a class = "neue-haas" href="https://fonts.adobe.com/fonts/neue-haas-grotesk" target="_blank"> Neue Haas Grotesk Display </a></p>
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

	.affigere {
		font-family: var(--title-font);
		font-size: 1.3em;
	}

	.neue-haas {
		font-family: var(--text-font);
	}


	.nav {
		display: flex;
		justify-content: center;
		/* align-items: flex-end; */
		gap: 1rem;
		align-items: center;
		font-size: var(--text-size2);
		font-family: var(--text-font);
		font-weight: 500;
	}
	.nav ul {
		list-style: none;
		display: flex;
		gap: 1rem;
		align-items: center;
		/* width: 100%; */
		/* justify-content: space-between; */
	}
	.nav li {
		display: inline-block;
		padding: 1rem;
	}
	.nav a {
		text-decoration: none;
		color: var(--secondary-color);
	}

	.nav a:hover {
		color: var(--primary-color);
		text-decoration: underline;
	}

	.nav a.active {
		color: var(--primary-color);
	}

	.title {
		font-size: var(--logo-size);
		font-family: var(--title-font), sans-serif;
		font-weight: 400;
		font-style: normal;
		/* color: var(--primary-color); */
	}

	/* .title:hover {
		color: var(--secondary-color);
		text-decoration: underline;
	} */

	
</style>