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
        <path d="M41.293 19.293l-17-17A1 1 0 0023.586 2H9a1 1 0 00-1 1v14.586a1 1 0 00.293.707l17 17a1 1 0 001.414 0l14.586-14.586a1 1 0 000-1.414zM14 10.6A2.6 2.6 0 1116.6 8a2.6 2.6 0 01-2.6 2.6z"/>
<path d="M39 29L26.707 41.293a1 1 0 01-1.414 0l-17-17A1 1 0 018 23.585v6a1 1 0 00.293.707l17 17a1 1 0 001.414 0l14.586-14.585a1 1 0 000-1.414z"/>
    </svg>