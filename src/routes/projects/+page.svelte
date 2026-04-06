<script lang="ts">
    import projects from '$lib/data/project.json';
    import Project from '$lib/components/Project.svelte';
    import Title from '$lib/components/Title.svelte';
    import type { ProjectType } from '$lib/types';
</script>

<div style="width: 100%; text-align: center;"> 
    <h2 class = "Title">
        Currently under construction...
    </h2>
    <div>
        <p>
            Projects I have worked on.
        </p>
        <div class="projects">
            {#each projects as p}
            <Project project={p as ProjectType} /> <!-- type assertion to avoid type error -->
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

