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
        <path d="M48 28H0l8-10h32zM0 30v6a2 2 0 002 2h44a2 2 0 002-2v-6zm10 13v-3H6v3a1 1 0 001 1h2a1 1 0 001-1zm32 0v-3h-4v3a1 1 0 001 1h2a1 1 0 001-1zM38 8H10a2 2 0 00-2 2v6h2v-2a2 2 0 012-2h8a2 2 0 012 2v2h4v-2a2 2 0 012-2h8a2 2 0 012 2v2h2v-6a2 2 0 00-2-2z"/>
    </svg>