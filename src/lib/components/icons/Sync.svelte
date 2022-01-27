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
        <path d="M45.664 30.253l-12-12a.979.979 0 00-.658-.253A1 1 0 0032 19v7H22a2 2 0 00-2 2v6a2 2 0 002 2h10v7a1 1 0 001.006 1 .979.979 0 00.658-.255l12-12a1 1 0 000-1.494z"/>
<path d="M26 22a2 2 0 002-2v-6a2 2 0 00-2-2H16V5a1 1 0 00-1.006-1 .979.979 0 00-.658.255l-12 12a1 1 0 000 1.494l12 12a.979.979 0 00.658.255A1 1 0 0016 29v-7z"/>
    </svg>