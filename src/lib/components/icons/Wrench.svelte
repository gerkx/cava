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
        <path d="M42.005 36.447L26.651 21.093c-4.889-4.931-1.666-11.607-6.3-16.244C16.363.863 8.54 1.885 6.756 3.008a.2.2 0 00.036.336l8.417 4.185a.5.5 0 01.276.408l.391 4.932a1 1 0 01-.458.922l-4.168 2.666a.5.5 0 01-.492.026l-8.482-4.216a.2.2 0 00-.286.121c-.206 1.356 1.672 5.473 4.216 8.017 4.243 4.243 10.55 2.106 13.374 4.93L34.6 43.09a5.081 5.081 0 00.533.63 5 5 0 007.418-.383 5.2 5.2 0 00-.546-6.89z"/>
    </svg>