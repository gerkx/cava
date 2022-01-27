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
        <path d="M39 8H9a1 1 0 01-1-1V5a1 1 0 011-1h30a1 1 0 011 1v2a1 1 0 01-1 1zm1 15v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 001 1h30a1 1 0 001-1zm4-8v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1h38a1 1 0 001-1zM26 43v-7h3.586a1 1 0 00.707-1.707L24 28l-6.293 6.293A1 1 0 0018.414 36H22v7a1 1 0 001 1h2a1 1 0 001-1z"/>
    </svg>