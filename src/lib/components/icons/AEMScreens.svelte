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
        <path d="M16 2H2a2 2 0 00-2 2v28a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zm-1 29H3V5h12zM44 2H22a2 2 0 00-2 2v14a2 2 0 002 2h1.51a10.18 10.18 0 011.709-2.086A8.352 8.352 0 0124.43 16H23V5h20v11h-3.1a8.234 8.234 0 01-.89 2.105A10.068 10.068 0 0140.476 20H44a2 2 0 002-2V4a2 2 0 00-2-2zM28.158 14.008a4.008 4.008 0 114.008 4.007 4.008 4.008 0 01-4.008-4.007zM38 25.243v7.305a1.106 1.106 0 01-1.09 1.12h-1.092l-1.09 11.211A1.106 1.106 0 0133.635 46h-3.272a1.106 1.106 0 01-1.091-1.121l-1.091-11.21H27.09A1.106 1.106 0 0126 32.548v-7.305a5.882 5.882 0 015.8-5.96h.4a5.882 5.882 0 015.8 5.96z"/>
    </svg>