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
        <path d="M43.167 20.167a3.817 3.817 0 00-3.3 1.916h-6.061a9.946 9.946 0 00-3.56-5.835l3.494-6.639a3.838 3.838 0 10-3.394-1.781l-3.492 6.636A9.874 9.874 0 0024 14a9.881 9.881 0 00-2.855.464l-3.492-6.636a3.831 3.831 0 10-3.394 1.781l3.5 6.639a9.947 9.947 0 00-3.561 5.835H8.134a3.833 3.833 0 100 3.834h6.059a9.947 9.947 0 003.561 5.835l-3.5 6.639a3.841 3.841 0 103.394 1.781l3.492-6.636A9.881 9.881 0 0024 34a9.874 9.874 0 002.854-.464l3.492 6.636a3.832 3.832 0 103.394-1.781l-3.494-6.639a9.946 9.946 0 003.56-5.835h6.059a3.827 3.827 0 103.3-5.75zM24 30.1a6.1 6.1 0 116.1-6.1 6.1 6.1 0 01-6.1 6.1z"/>
    </svg>