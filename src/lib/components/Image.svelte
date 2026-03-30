<script lang="ts">
    let {
        src,
        alt = '',
        className = '',
        size = '',
        spinOnHover = true,
        rotateKey,
        rotateStepDeg,
        margin = '--space-2xl',
    }: {
        src: string;
        alt?: string;
        className?: string;
        size?: string;
        spinOnHover?: boolean;
        rotateKey?: number;
        rotateStepDeg?: number;
        margin?: string;
    } = $props();

    let currentDegree: number = $state(0);
    let lastRotateKey: number | null = null;

    function spinBy(step = 45) {
        currentDegree += step;
    }

    // Drive rotation from a parent by changing `rotateKey`.
    $effect(() => {
        if (rotateKey == null) return;
        if (rotateKey <= 0) return;
        if (rotateKey === lastRotateKey) return;

        currentDegree += rotateStepDeg ?? 0;
        lastRotateKey = rotateKey;
    });

</script>

<div
    class={`image-container ${className}`}
    style={size ? `--image-size: ${size};` : undefined}
>
    <img
        class="image"
        src={src}
        alt={alt}
        style={`transform: rotate(${currentDegree}deg);`}
        onmouseenter={() => spinOnHover && spinBy(60)}
        onmouseleave={() => spinOnHover && spinBy(-60)}
    />
</div>

<style>
    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        contain: paint;
        isolation: isolate;
        background-color: transparent;
    }
    .star {
        padding: 0 var(--space-3xl);
        margin-bottom: var(--space-2xl);

    }
    .image-container .image {
        width: var(--image-size, var(--title-size));
        height: var(--image-size, var(--title-size));
        display: block;
        object-fit: contain;
        transform-origin: center;
        backface-visibility: hidden;
        will-change: transform;
        transition: transform 300ms ease-in-out;
    }

    .toggle-star:hover .image {
        cursor: pointer;
    }
</style>