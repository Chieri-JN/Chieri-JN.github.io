<script lang="ts">
	import site from '$lib/assets/Site-01.svg';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Image from '$lib/components/Image.svelte';
	import starP from '$lib/assets/star-purple.svg';
	import starR from '$lib/assets/star-red.svg';
	import '../app.css';

	let { children } = $props();


	let pages = [
		{ name: 'CJN', url: '.' },
		{ name: 'Projects', url: '/projects' },
		{ name: 'CV', url: '/cv' },
		{ name: 'About', url: '/about' }, // inlcudes links to my socials
		// { name: 'Contact', url: '/contact' },
	]

	function isActive(url: string) {
		if (url === '.') {
			return $page.url.pathname === '/';
		}
		return $page.url.pathname === url || $page.url.pathname.startsWith(url + '/');
	}

	const STORAGE_KEY = 'colourMode';
	let colourMode = $state('light');
	let starRotateKey = $state(0);
	let starRotateStepDeg = $state(90);
	let starNextDirection = $state(1); // 1 = clockwise first, then alternates.

	function toggleStarRotation() {
		starRotateKey += 1;
		starRotateStepDeg = starNextDirection * 90;
		starNextDirection *= -1;
	}

	function toggleColourMode() {
		colourMode = colourMode === 'light' ? 'dark' : 'light';
		document.documentElement.classList.toggle('dark', colourMode === 'dark');
		try {
			localStorage.setItem(STORAGE_KEY, colourMode);
		} catch (_) {}
	}

	$effect(() => {
		document.documentElement.classList.toggle('dark', colourMode === 'dark');
	});

	onMount(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY) as 'light' | 'dark' | null;
			if (stored === 'light' || stored === 'dark') {
				colourMode = stored;
			} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				colourMode = 'dark';
			}
		} catch (_) {}
	});

	function handleModeToggleClick() {
		toggleStarRotation();
		toggleColourMode();
	}

</script>

<svelte:head>
	<link rel="icon" href={site} />
	<link rel="stylesheet" href="https://use.typekit.net/cfe6wef.css">
	<link rel="stylesheet" href="https://use.typekit.net/cfe6wef.css">
</svelte:head>

<div class="page">

	<header>
		<span class="nav-container">
			<nav class="nav">
				<ul class="nav-list">
					<li><a href="." class="title" class:active={isActive('.')}>CJN</a></li>
					<div class="nav-list-items"> 
						{#each pages as page}
							{#if page.name !== 'CJN'}
								<li><a href={page.url} class={isActive(page.url) ? 'active' : ''}>{page.name}</a></li>
							{:else}
								<!-- <li><a href="." class="title" class:active={isActive('.')}>CJN</a></li> -->
							{/if}
						{/each}
					</div>
					<div class="screen-mode-switch">
						<div
							class="mode-toggle-star"
							role="button"
							tabindex="0"
							aria-label="Toggle light/dark mode"
							onclick={handleModeToggleClick}
							onkeydown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									handleModeToggleClick();
								}
							}}
						>
							<Image
								src={colourMode === 'light' ? starP : starR}
								alt="toggle theme star"
								className="toggle-star"
								size="1.5em"
								spinOnHover={false}
								rotateKey={starRotateKey}
								rotateStepDeg={starRotateStepDeg}
								margin={"0"}
							/>
						</div>
					</div>
				</ul>
				
			</nav>
			
		</span>
		
		
	</header>	



	<main>
		{@render children?.()}
	</main>

	<footer>
		<!-- <p>Typefaces used: <a class = "affigere" href="https://xcicero.esad-gv.net/page/affigere/" target="_blank"> Affigere Regular </a> and <a class = "neue-haas" href="https://fonts.adobe.com/fonts/neue-haas-grotesk" target="_blank"> Neue Haas Grotesk Display </a></p> -->
		<p>Typefaces & fonts used: <a class = "affigere" href="https://xcicero.esad-gv.net/page/affigere/" target="_blank"> Affigere Regular </a> and <a class = "league-spartan" href="https://www.theleagueofmoveabletype.com/league-spartan" target="_blank"> League Spartan </a></p>
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

	.league-spartan {
       font-family: var(--atl-text-font);
   }


	.nav {
		display: flex;
		
		/* align-items: flex-end; */
		gap: 1rem;
		align-items: center;
		font-size: var(--text-size2);
		font-family: var(--text-font);
		font-weight: 500;
		width: 90%;
		padding-bottom: 2.5em;
		
	}
	.nav ul {
		list-style: none;
		display: flex;
		gap: 2rem;
		align-items: center;
		width: 100%;
		justify-content: space-between;
	}
	.nav li {
		display: inline-block;
		/* padding: 1rem; */
		/* padding-left: 1em;
		padding-right: 1em; */
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
		/* padding-right: 0em;
		padding-left: 0em; */
		/* color: var(--primary-color); */
	}

	.title:hover {
		color: var(--primary-color);
		text-decoration: none;
	}

	.nav-list {
		padding-inline-start: 0;
	}
	.nav-list-items {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5.5rem;

	}

	.nav-container {
		display: flex;
		justify-content: center;
		align-items: center;
		/* padding-bottom: 0.5em; */

	}
	.screen-mode-switch {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
	.mode-toggle-star {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background-color: transparent;
		border-radius: 50%;
		padding: 0;
		margin: 0;
	}

	.mode-toggle-star:focus-visible {
		outline: 2px solid var(--secondary-color);
		outline-offset: 2px;
	}

	
</style>