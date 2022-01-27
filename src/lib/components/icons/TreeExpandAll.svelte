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
        <path d="M8 10a2 2 0 012-2h26V6a2 2 0 00-2-2H6a2 2 0 00-2 2v28a2 2 0 002 2h2z"/>
<path d="M42 12H14a2 2 0 00-2 2v28a2 2 0 002 2h28a2 2 0 002-2V14a2 2 0 00-2-2zm-5 18h-7v7a1 1 0 01-1 1h-2a1 1 0 01-1-1v-7h-7a1 1 0 01-1-1v-2a1 1 0 011-1h7v-7a1 1 0 011-1h2a1 1 0 011 1v7h7a1 1 0 011 1v2a1 1 0 01-1 1z"/>
    </svg>