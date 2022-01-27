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
        <path d="M35 23.959L23.45 8.599A1.5 1.5 0 0022.251 8H2a2 2 0 00-2 2v28a2 2 0 002 2h20.249a1.5 1.5 0 001.201-.601zM6 27.6A3.6 3.6 0 119.6 24 3.6 3.6 0 016 27.6zm10 0a3.6 3.6 0 113.6-3.6 3.6 3.6 0 01-3.6 3.6zm10 0a3.6 3.6 0 113.6-3.6 3.6 3.6 0 01-3.6 3.6zm22-3.641L36.6 39.198a2 2 0 01-1.602.802h-5.001a1 1 0 01-.8-1.599L40 23.959 29.204 9.6a1 1 0 01.8-1.601h4.998a2 2 0 011.598.798z"/>
    </svg>