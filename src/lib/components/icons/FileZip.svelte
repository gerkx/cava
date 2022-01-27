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
        <path d="M28 4v12h12L28 4z"/>
<circle cx="17.814" cy="32.472" r="3.211"/>
<path d="M26 20a2 2 0 01-2-2V4h-4v18a2 2 0 01-4 0V4h-6a2 2 0 00-2 2v36a2 2 0 002 2h6v-2a2 2 0 014 0v2h18a2 2 0 002-2V20zm-2 16a2 2 0 01-2 2h-8a2 2 0 01-2-2V23a1 1 0 011-1h1v2a2 2 0 002 2h4a2 2 0 002-2v-2h1a1 1 0 011 1z"/>
    </svg>