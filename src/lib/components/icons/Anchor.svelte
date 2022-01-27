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
        <path d="M45.274 31.171L39.4 24l-6.117 7.171a.5.5 0 00.377.829h3.727S32.657 38.584 26 38.584V22h3a1 1 0 001-1v-2a1 1 0 00-1-1h-3v-2.7a7 7 0 10-6 0V18h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v16.584C13.032 38.584 8.613 32 8.613 32h3.515a.5.5 0 00.376-.829L6.6 24 .726 31.171A.5.5 0 001.1 32H4c2.886 6.986 9.86 12 19 12s16.114-5.014 19-12h2.9a.5.5 0 00.374-.829zM19.5 8.8a3.5 3.5 0 113.5 3.5 3.5 3.5 0 01-3.5-3.5z"/>
    </svg>