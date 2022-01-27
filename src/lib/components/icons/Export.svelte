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
        <path d="M42.854 23.646L33.707 14.3A1 1 0 0032 15v5h-9a1 1 0 00-1 1v6a1 1 0 001 1h9v5a1 1 0 001.707.707l9.147-9.353a.5.5 0 000-.708z"/>
<path d="M40 42v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H8V8h28v3a1 1 0 001 1h2a1 1 0 001-1V6a2 2 0 00-2-2H6a2 2 0 00-2 2v36a2 2 0 002 2h32a2 2 0 002-2z"/>
    </svg>