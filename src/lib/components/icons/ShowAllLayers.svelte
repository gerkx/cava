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
        <path d="M43.842 35.724l-7.092-3.553L24 38.558l-12.75-6.387-7.092 3.553a.5.5 0 000 .894l19.394 9.716a1 1 0 00.9 0l19.394-9.716a.5.5 0 00-.004-.894z"/>
<path d="M43.842 23.724l-7.092-3.553L24 26.558l-12.75-6.387-7.092 3.553a.5.5 0 000 .894l19.394 9.716a1 1 0 00.9 0l19.394-9.716a.5.5 0 00-.004-.894z"/>
<path d="M23.552 22.334L4.158 12.618a.5.5 0 010-.894l19.394-9.716a1 1 0 01.9 0l19.394 9.716a.5.5 0 010 .894l-19.398 9.716a1 1 0 01-.896 0z"/>
    </svg>