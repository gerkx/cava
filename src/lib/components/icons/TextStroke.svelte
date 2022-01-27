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
        <path d="M36 9v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3h-6v24h3a1 1 0 011 1v2a1 1 0 01-1 1H17a1 1 0 01-1-1v-2a1 1 0 011-1h3V12h-6v3a1 1 0 01-1 1h-2a1 1 0 01-1-1V9a1 1 0 011-1h24a1 1 0 011 1zM8 4a2 2 0 00-2 2v12a2 2 0 002 2h8v12h-2a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2v-8a2 2 0 00-2-2h-2V20h8a2 2 0 002-2V6a2 2 0 00-2-2z"/>
    </svg>