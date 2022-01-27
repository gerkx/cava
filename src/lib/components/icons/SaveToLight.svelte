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
        <path d="M43 12h-6a1 1 0 00-1 1v2a1 1 0 001 1h3v22H6V16h3a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v28a1 1 0 001 1h40a1 1 0 001-1V13a1 1 0 00-1-1z"/>
<path d="M32.586 16H26V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v13h-6.586a1 1 0 00-.707 1.707L23 28l10.293-10.293A1 1 0 0032.586 16z"/>
    </svg>