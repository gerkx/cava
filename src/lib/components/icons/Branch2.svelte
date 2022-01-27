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
        <path d="M38 30a7.948 7.948 0 00-6.161 2.954l-13.983-7.531a7.121 7.121 0 000-2.846l13.983-7.531A7.958 7.958 0 1030 10a7.987 7.987 0 00.144 1.423L16.16 18.954a8 8 0 100 10.093l13.983 7.531A7.991 7.991 0 1038 30zm0-24.2a4.2 4.2 0 11-4.2 4.2A4.2 4.2 0 0138 5.8zm0 36.4a4.2 4.2 0 114.2-4.2 4.2 4.2 0 01-4.2 4.2z"/>
    </svg>