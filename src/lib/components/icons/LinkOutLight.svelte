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
        <path d="M40 24.5V38H8V8h15.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H5a1 1 0 00-1 1v36a1 1 0 001 1h38a1 1 0 001-1V24.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5z"/>
<path d="M30.241 4a1.008 1.008 0 00-.655 1.716l4.228 4.228-9.842 9.842a.5.5 0 000 .707l3.535 3.535a.5.5 0 00.707 0l9.842-9.842 4.218 4.214a1 1 0 001.706-.655V4z"/>
    </svg>