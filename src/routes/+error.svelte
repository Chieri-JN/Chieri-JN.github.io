<script>
	import { page } from '$app/stores';
</script>

<div class="error-page">
	<h1 style="font-size: var(--super-big-size);">{$page.status}</h1>
	
	{#if $page.status === 404}
		<p>Page not found</p>
	{:else}
		<p>{$page.error?.message || 'Something went wrong'}</p>
	{/if}
	
	<!-- <a href="/">Return home</a> -->
</div>

<style>
	.error-page {
		text-align: center;
		padding: 2rem;
		min-height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
	
	h1 {
		font-size: 8rem;
		font-family: var(--title-font), sans-serif;
		font-weight: 400;
		color: var(--primary-color);
		margin: 0;
	}
	
	p {
		font-size: var(--text-size2);
		margin: 0;
	}



</style>

