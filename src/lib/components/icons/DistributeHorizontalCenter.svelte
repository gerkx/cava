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
        <path d="M38 14h-2V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v11h-2a2 2 0 00-2 2v16a2 2 0 002 2h2v11a1 1 0 001 1h2a1 1 0 001-1V34h2a2 2 0 002-2V16a2 2 0 00-2-2zM18 8h-2V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v5h-2a2 2 0 00-2 2v28a2 2 0 002 2h2v5a1 1 0 001 1h2a1 1 0 001-1v-5h2a2 2 0 002-2V10a2 2 0 00-2-2z"/>
    </svg>