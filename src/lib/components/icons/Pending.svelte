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
        <path d="M26 22.086V11a1 1 0 00-1-1h-2a1 1 0 00-1 1v12.586a1 1 0 00.293.707l6.3 6.3a1 1 0 001.414 0l1.336-1.336a1 1 0 000-1.414l-5.054-5.054a1 1 0 01-.289-.703z"/>
<path d="M40.063 26A16.193 16.193 0 1122 7.937V4.1A20 20 0 1043.9 26zM32.171 5.759A19.839 19.839 0 0026 4.1v3.837a16.063 16.063 0 014.261 1.148zm4.855 8.66l3.344-1.87a20.117 20.117 0 00-4.726-4.8l-1.917 3.338a16.4 16.4 0 013.299 3.332zm1.949 3.495A15.972 15.972 0 0140.063 22H43.9a19.827 19.827 0 00-1.566-5.965z"/>
    </svg>