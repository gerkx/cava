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
        <rect height="8" rx="2" ry="2" width="8" x="20" y="20"/>
<path d="M37 18a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v1H18v-1a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1h1v12h-1a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-1h12v1a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-1V18zm-5 12h-1a1 1 0 00-1 1v1H18v-1a1 1 0 00-1-1h-1V18h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1z"/>
    </svg>