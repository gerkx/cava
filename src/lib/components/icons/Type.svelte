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
        <path d="M32 6h5a1 1 0 001-1V3a1 1 0 00-1-1h-5.343a4 4 0 00-2.828 1.172L24 8l-4.828-4.828A4 4 0 0016.343 2H11a1 1 0 00-1 1v2a1 1 0 001 1h5l6 6v18h-7a1 1 0 00-1 1v2a1 1 0 001 1h7v2l-6 6h-5a1 1 0 00-1 1v2a1 1 0 001 1h5.343a4 4 0 002.828-1.172L24 40l4.828 4.828A4 4 0 0031.657 46H37a1 1 0 001-1v-2a1 1 0 00-1-1h-5l-6-6v-2h7a1 1 0 001-1v-2a1 1 0 00-1-1h-7V12z"/>
    </svg>