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
        <path d="M38 6H10a6 6 0 00-6 6v16a6 6 0 006 6h2v9.593a1 1 0 001.707.707L24 34h14a6 6 0 006-6V12a6 6 0 00-6-6zM12 24.45A4.45 4.45 0 1116.45 20 4.45 4.45 0 0112 24.45zm12 0A4.45 4.45 0 1128.45 20 4.45 4.45 0 0124 24.45zm12 0A4.45 4.45 0 1140.45 20 4.45 4.45 0 0136 24.45z"/>
    </svg>