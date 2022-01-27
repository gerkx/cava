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
        <path d="M40 33v7H8v-7a1 1 0 00-1-1H5a1 1 0 00-1 1v9a2 2 0 002 2h36a2 2 0 002-2v-9a1 1 0 00-1-1h-2a1 1 0 00-1 1z"/>
<path d="M24.354 32.854l9.351-9.147A1 1 0 0033 22h-5V5a1 1 0 00-1-1h-6a1 1 0 00-1 1v17h-5a1 1 0 00-.707 1.707l9.353 9.147a.5.5 0 00.708 0z"/>
    </svg>