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
        <path d="M16.647 26.889a7.859 7.859 0 00-6.01 2.189 14.077 14.077 0 00-2.967 5.878c-.875 2.782-1.7 5.41-5.261 7.107a1 1 0 00.263 1.89c.8.136 1.721.251 2.72.326 3.6.268 10.379.154 15.314-3.6a7.6 7.6 0 003.139-5.563 7.739 7.739 0 00-7.198-8.227zM26.53 30.1C36.51 18.977 47.871 5.715 45.094 2.938S29.335 13.15 19.48 23.8a11.4 11.4 0 017.05 6.3z"/>
    </svg>