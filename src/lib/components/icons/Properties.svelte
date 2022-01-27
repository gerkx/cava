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
        <path d="M43 8H21.675a6.956 6.956 0 00-13.35 0H5a1 1 0 00-1 1v2a1 1 0 001 1h3.325a6.956 6.956 0 0013.35 0H43a1 1 0 001-1V9a1 1 0 00-1-1zm-28 5.3a3.3 3.3 0 113.3-3.3 3.3 3.3 0 01-3.3 3.3zM5 26h21.325a6.956 6.956 0 0013.35 0H43a1 1 0 001-1v-2a1 1 0 00-1-1h-3.325a6.956 6.956 0 00-13.35 0H5a1 1 0 00-1 1v2a1 1 0 001 1zm24.7-2a3.3 3.3 0 113.3 3.3 3.3 3.3 0 01-3.3-3.3z"/>
<path d="M43 36H27.675a6.956 6.956 0 00-13.35 0H5a1 1 0 00-1 1v2a1 1 0 001 1h9.325a6.956 6.956 0 0013.35 0H43a1 1 0 001-1v-2a1 1 0 00-1-1zm-22 5.3a3.3 3.3 0 113.3-3.3 3.3 3.3 0 01-3.3 3.3z"/>
    </svg>