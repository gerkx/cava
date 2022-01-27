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
        <path d="M39.5 14h-21a4.5 4.5 0 00-4.5 4.5v21a4.5 4.5 0 004.5 4.5h21a4.5 4.5 0 004.5-4.5v-21a4.5 4.5 0 00-4.5-4.5zm1.542 10.82l-14.82 14.819a1 1 0 01-1.414 0l-7.85-7.848a1 1 0 010-1.414l3.113-3.113a1 1 0 011.414 0l4.03 4.036 11-11a1 1 0 011.414 0l3.113 3.113a1 1 0 010 1.407z"/>
<path d="M10 10h26V8.8A4.8 4.8 0 0031.2 4H8.8A4.8 4.8 0 004 8.8v22.4A4.8 4.8 0 008.8 36H10z"/>
    </svg>