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
        <path d="M46.967 17.635L30.7 16.868l-5.654-15.12a1 1 0 00-1.869-.013l-5.883 15.133-16.262.781a1 1 0 00-.577 1.779l12.7 10.189-4.309 15.727a1 1 0 001.513 1.1L24 37.5l13.582 8.86a1 1 0 001.512-1.1l-4.253-15.643 12.7-10.2a1 1 0 00-.574-1.782zM14.492 39.176l3-10.968L8.618 21.1l11.358-.537L24 9.922l4.021 10.637 11.358.537-8.879 7.112 3 10.968-9.5-6.241z"/>
    </svg>