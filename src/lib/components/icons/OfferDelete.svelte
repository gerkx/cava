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
        <path d="M47 16h-2a1 1 0 00-1 1v5.275A15.9 15.9 0 0146.41 24H47a1 1 0 001-1v-6a1 1 0 00-1-1zm-36-6h6a1 1 0 001-1V7a1 1 0 00-1-1h-6a1 1 0 00-1 1v2a1 1 0 001 1zm10 0h6a1 1 0 001-1V7a1 1 0 00-1-1h-6a1 1 0 00-1 1v2a1 1 0 001 1zM1 24h2a1 1 0 001-1v-6a1 1 0 00-1-1H1a1 1 0 00-1 1v6a1 1 0 001 1zM44 6h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v3a1 1 0 001 1h2a1 1 0 001-1v-3a4 4 0 00-4-4zm-7 0h-6a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1zm-12.581 9.594a.448.448 0 00-.838 0l-2.394 6.33-6.76.32a.448.448 0 00-.259.8l5.28 4.231-1.783 6.525a.448.448 0 00.678.493l2.057-1.35A15.92 15.92 0 0128.456 22l-1.644-.078zM20 41v2a1 1 0 001 1h1.275a15.753 15.753 0 01-1.629-3.928A1 1 0 0020 41zM1 34h2a1 1 0 001-1v-6a1 1 0 00-1-1H1a1 1 0 00-1 1v6a1 1 0 001 1zm16 6h-6a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1zM7 6H4a4 4 0 00-4 4v3a1 1 0 001 1h2a1 1 0 001-1v-3h3a1 1 0 001-1V7a1 1 0 00-1-1zm0 34H4v-3a1 1 0 00-1-1H1a1 1 0 00-1 1v3a4 4 0 004 4h3a1 1 0 001-1v-2a1 1 0 00-1-1zm29-15.9A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h15a.5.5 0 01.5.5z"/>
    </svg>