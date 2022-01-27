<script lang="ts">
        import type { inputSize } from '$lib/types';
        import { INPUT_SIZE_MAP } from '$lib/logic/inputs';
        import { parseLength } from '$lib/logic/svg';

        export let height: string = "1em";
        export let fill: string = "currentColor";
        export let stroke: string | undefined = undefined; 
        export let scale: number = 1.0;
        export let aspectRatio: number = 1;
        export let size: inputSize = null;

        const calcSize = (baseSize: number): number => {
            let calcSize = baseSize;
            if (size) {
                const factor = INPUT_SIZE_MAP[size]
                if (factor) calcSize *= factor
            } 
            if (scale) calcSize *= scale;

            return calcSize
        }

        const heightTup = parseLength(height);
        const scaledHeight = `${calcSize(heightTup[0])}${heightTup[1]}`;
        
        const derivedWidthVal = calcSize(heightTup[0]*aspectRatio);
        const derivedWidth = `${derivedWidthVal}${heightTup[1]}`;

    </script>

    <svg 
        height={scaledHeight}
        width={derivedWidth}
        {fill}
        {stroke}
        viewBox="0 0 48 48"
        {...$$restProps}
    >
        <path d="M4.946 38H27.61a11.995 11.995 0 019.98-17.99s-.01-.947-.01-1.476A10.31 10.31 0 0027.124 8c-5.392 0-9.008 4.182-10.274 8.499a10.404 10.404 0 00-2.839-.396 8.492 8.492 0 00-8.657 8.282 6.627 6.627 0 00.18 2.15C2.426 26.535 0 29.987 0 32.347 0 35.748 1.774 38 4.946 38z"/>
<path d="M38 22a10 10 0 1010 10 10.01 10.01 0 00-10-10zm5.246 13.416a1.295 1.295 0 01-.915 2.211 1.302 1.302 0 01-.916-.381L38 33.83l-3.415 3.416a1.293 1.293 0 01-2.21-.915 1.286 1.286 0 01.379-.915L36.17 32l-3.37-3.404a1.151 1.151 0 01-.43-.828 1.417 1.417 0 011.346-1.383 1.302 1.302 0 01.916.38L38 30.17l3.368-3.404a1.302 1.302 0 01.916-.381 1.417 1.417 0 011.346 1.383 1.151 1.151 0 01-.43.828L39.83 32z"/>
    </svg>