<script lang="ts">
    import positions from '$lib/data/cv.json';
    import Position from '$lib/components/Position.svelte';
    import Title from '$lib/components/Title.svelte';
    import type { PositionType } from '$lib/types';
</script>

<div style="width: 100%; text-align: center;"> 
    <h2 class = "Title">
        Currently under construction...
    </h2>
    <div>
        <p>
            My work experience.
        </p>
        <div class="projects">
            {#each positions as p}
            <Position position={p as PositionType} /> <!-- type assertion to avoid type error -->
            {/each}
        </div>
        
    </div>
</div>


<style>
    .projects {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        max-width: 50em;
        padding: 2em;
        gap: 2em;
    }
</style>

