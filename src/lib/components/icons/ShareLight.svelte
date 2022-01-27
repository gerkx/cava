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
        <path d="M45 12h-6.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H42v22H6V16h3.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H3a1 1 0 00-1 1v28a1 1 0 001 1h42a1 1 0 001-1V13a1 1 0 00-1-1z"/>
<path d="M33.722 10.331L24 0l-9.708 10.331A1 1 0 0015.035 12H20v13.5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V12h4.979a1 1 0 00.743-1.669z"/>
    </svg>