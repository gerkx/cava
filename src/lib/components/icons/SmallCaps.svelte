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
        <path d="M29 20a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-3h4v14h-3a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1h-3V24h4v2.973a1 1 0 001 1h2a1 1 0 001-1V21a1 1 0 00-1-1z"/>
<path d="M2 6h30a2 2 0 012 2v7a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5H20v28h3a1 1 0 011 1v2a1 1 0 01-1 1H11a1 1 0 01-1-1v-2a1 1 0 011-1h3V10H4v5a1 1 0 01-1 1H1a1 1 0 01-1-1V8a2 2 0 012-2z"/>
    </svg>