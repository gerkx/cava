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
        <path d="M41.977 44A2.008 2.008 0 0044 41.743c-1.364-8.282-10.117-11.143-12.853-11.38-2.075-.18-2.108-1.841-2.108-3.911 0 0 4.449-4.942 4.449-11.229C33.488 8.424 29.6 4 24 4s-9.488 4.424-9.488 11.223c0 6.287 4.449 11.229 4.449 11.229 0 2.07-.033 3.731-2.108 3.911C14.117 30.6 5.364 33.461 4 41.743A2.008 2.008 0 006.023 44z"/>
    </svg>