<script lang="ts">
    import type { ProjectType } from '$lib/types';
    let { project }: { project: ProjectType } = $props();
</script>

<div class="project-container">
    <h3 class="project-title">{project.title}</h3>
    <p> {project.description} </p>
    <a  href={project.link} target="_blank">View Project</a>
</div>

<style>
    .project-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        /* max-width: 800px; */
        width: 20em;
        padding: 2em;
        border: 2px solid var(--grey-sub);
        border-radius: 1em;    
        box-shadow: 0 0 10px 0 var(--secondary-color);
        transition: all 0.2s ease-in-out;
    }
    .project-container:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px 0 var(--quaternary-color);
    }
    .project-title {
        font-family: var(--text-font);
        font-size: 2em;
        font-weight: 600;
        color: var(--primary-color);
    }
    /* .project-description {
        font-size: 1.5em;
        color: var(--secondary-color);
    } */
</style>