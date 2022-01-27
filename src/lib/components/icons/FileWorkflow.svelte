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
<path d="M20 43.5v-9a4.506 4.506 0 014.5-4.5h12.26A4.489 4.489 0 0140 28.063V20H26a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h10.051a4.446 4.446 0 01-.051-.5z"/>
<path d="M46 37.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V36h-4v6h4v-1.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V44h-5.5a.5.5 0 01-.5-.5V40h-4v3.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V38h4v-3.5a.5.5 0 01.5-.5H40v-1.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5z"/>
    </svg>