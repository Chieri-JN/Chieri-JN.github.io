<script lang="ts">
    import type { PositionType } from '$lib/types';

    let { position }: { position: PositionType } = $props();
</script>


<div>
    <h3>{position.title}</h3>
    <p>{position.company}</p>
    <p>{position.location}</p>
    <p>{position.description}</p>
    <p>{position.date}</p>
</div>