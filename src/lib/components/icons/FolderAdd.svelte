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
        <path d="M36 20a15.916 15.916 0 0110 3.53V12a2 2 0 00-2-2H27.266l-4.844-4.832A4 4 0 0019.6 4H6a4 4 0 00-4 4v32a2 2 0 002 2h17.178A15.979 15.979 0 0136 20zM6 8h13.6l6.015 6H6z"/>
<path d="M36 24a12 12 0 1012 12 12 12 0 00-12-12zm8 13a1 1 0 01-1 1h-5v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-5a1 1 0 01-1-1v-2a1 1 0 011-1h5v-5a1 1 0 011-1h2a1 1 0 011 1v5h5a1 1 0 011 1z"/>
    </svg>