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
        <path d="M10 8a1.914 1.914 0 00-2 2v26a2.02 2.02 0 002 2 2.112 2.112 0 012 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2.112 2.112 0 012-2 2.021 2.021 0 002-2V22a2 2 0 002-2v-2a2 2 0 00-2-2v-6a1.987 1.987 0 00-2.083-2A1.947 1.947 0 0134 6V2a2 2 0 00-2-2H14a2 2 0 00-2 2v4a1.875 1.875 0 01-2 2zm24 4v22H12V12z"/>
    </svg>