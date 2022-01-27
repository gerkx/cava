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
        <path d="M28 8V3a1 1 0 00-1.006-1 .979.979 0 00-.658.255l-10 10a1 1 0 000 1.494l10 10a.979.979 0 00.658.255A1 1 0 0028 23v-4.815a19.124 19.124 0 013.724-.259c5.437.41 9.777 3.917 12.424 7.256a.612.612 0 001.1-.366C45.252 22.121 42.278 8.051 28 8zM15.249 24H14v-5a1 1 0 00-1.006-1 .979.979 0 00-.658.255l-10 11a1 1 0 000 1.494l10 11a.979.979 0 00.658.255A1 1 0 0014 41v-5c8.337-1.667 16.133 3.007 19.869 7.717a.7.7 0 001.267-.42C35.136 40.2 31.71 24 15.249 24z"/>
    </svg>