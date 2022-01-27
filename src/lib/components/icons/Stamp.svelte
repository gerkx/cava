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
        <path d="M48 8V4h-6c0 2.209-.9 2-2 2s-2 .209-2-2h-4c0 2.209-.9 2.4-2 2.4s-2-.191-2-2.4h-4c0 2.209-.9 2.4-2 2.4s-2-.191-2-2.4h-4c0 2.209-.9 2.4-2 2.4s-2-.191-2-2.4h-4c0 2.209-.9 2.4-2 2.4S6 6.209 6 4H0v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4c2.209 0 2.4.9 2.4 2s-.191 2-2.4 2v4h6c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h4c0-2.209.9-2.4 2-2.4s2 .191 2 2.4h6v-4c-2.209 0-2-.9-2-2s-.209-2 2-2v-4c-2.209 0-2.4-.9-2.4-2s.191-2 2.4-2v-4c-2.209 0-2.4-.9-2.4-2s.191-2 2.4-2v-4c-2.209 0-2.4-.9-2.4-2s.191-2 2.4-2zM18 32h-4V16h-2v-4h6zm18-7a7 7 0 01-14 0v-6a7 7 0 0114 0z"/>
<path d="M32 19a3 3 0 00-6 0v6a3 3 0 006 0z"/>
<path d="M32 19a3 3 0 00-6 0v6a3 3 0 006 0z"/>
    </svg>