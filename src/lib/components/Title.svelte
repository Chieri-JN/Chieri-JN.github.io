<script lang="ts">
    // import starO from '$lib/assets/star-orange.svg'
    import starP from '$lib/assets/star-purple.svg'
    import starR from '$lib/assets/star-red.svg'
    import Image from '$lib/components/Image.svelte';

    let {size = ''} = $props();
    let first = "CHIERI";
    let second = "JN";
</script>

<div class="title-container">
    <span class="title-text">
        <h3 class={`title ${size}`}> {first} </h3>
        <span class="title-star title-star--light">
            <Image src={starP} alt="star" className="star" />
        </span>
        <span class="title-star title-star--dark">
            <Image src={starR} alt="star" className="star" />
        </span>
        <h3 class={`title ${size}`}> {second} </h3>
    </span>
</div>

<style> 
    .title-container {
        display: flex;
        align-items: center;
        justify-content: center;
        /* width: 100%;
        height: 100%; */
    }
    
    .title-text {
        display: flex;
        align-items: center;
        justify-content: center;
        /* color: var(--primary-color); */
        margin: 0;
    }

    .title {
        font-size: var(--super-big-size);
		font-family: var(--title-font), sans-serif;
		font-weight: 400;
		font-style: normal;
        margin: 0;
    }
    .title.small {
        font-size: var(--small-size);
    }
    .title.medium {
        font-size: var(--medium-size);
    }
    .title.large {
        font-size: var(--large-size);
    }

    .title-star {
        display: inline-flex;
        align-items: center;
    }

    .title-star--dark {
        display: none;
    }

    :global(html.dark) .title-star--light {
        display: none;
    }

    :global(html.dark) .title-star--dark {
        display: inline-flex;
    }

</style>