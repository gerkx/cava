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
        <path d="M44 4H4a2 2 0 00-2 2v26a2 2 0 002 2h14v4a2.006 2.006 0 01-2 2h-3a1 1 0 00-1 1v2a1 1 0 001 1h22a1 1 0 001-1v-2a1 1 0 00-1-1h-3a2.006 2.006 0 01-2-2v-4h14a2 2 0 002-2V6a2 2 0 00-2-2zm-2 19.445H32a1.779 1.779 0 01-1.59-.983l-2.959-5.919-5.463 9.557a1.778 1.778 0 01-1.544.9H20.4a1.78 1.78 0 01-1.542-.983l-2.371-4.743-1.367 1.563a1.776 1.776 0 01-1.338.608H6v-3.556h6.97l2.58-2.948a1.8 1.8 0 011.565-.594 1.783 1.783 0 011.364.969l2.07 4.14 5.463-9.56A1.834 1.834 0 0127.6 11a1.78 1.78 0 011.542.983l3.958 7.906H42z"/>
    </svg>