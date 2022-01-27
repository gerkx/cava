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
        <path d="M36 23.9A11.9 11.9 0 1024.1 12 11.9 11.9 0 0036 23.9zm-8-13.4a.5.5 0 01.5-.5H34V4.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V10h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-5.5a.5.5 0 01-.5-.5z"/>
<path d="M22.275 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V25.725a15.809 15.809 0 01-4 1.648V28h-8v-.627a15.809 15.809 0 01-4-1.648V28h-8v-8h2.275a15.8 15.8 0 010-16zM32 32h8v8h-8zm-12 0h8v8h-8zm-4-4H8v-8h8zm0 12H8v-8h8z"/>
    </svg>