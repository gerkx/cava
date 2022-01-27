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
        <path d="M18 38a7.948 7.948 0 00-2.954-6.161l7.531-13.982a7.121 7.121 0 002.846 0l7.53 13.983a8.116 8.116 0 103.623-1.7l-7.53-13.983a8 8 0 10-10.093 0l-7.531 13.987A7.991 7.991 0 1018 38zm24.2 0a4.2 4.2 0 11-4.2-4.2 4.2 4.2 0 014.2 4.2zM5.8 38a4.2 4.2 0 114.2 4.2A4.2 4.2 0 015.8 38z"/>
    </svg>