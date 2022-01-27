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
        <path d="M40 23.155l-1.392 1.391L23.181 9.118l1.391-1.391a2 2 0 012.829 0L40 20.326a2 2 0 010 2.829zM20.993 11.306l-1.028 1.1a2.184 2.184 0 00-.533 1.43l-1.182 9.096L3.184 38a2 2 0 000 2.827l3.739 3.743a2 2 0 002.832 0L24.8 29.477l9.09-1.177a2.179 2.179 0 001.429-.533l1.1-1.028zm.148 18.108l-3 3a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 2.828z"/>
    </svg>