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
        <path d="M46 4H10a2 2 0 00-2 2v27.892a2.076 2.076 0 01-1.664 2.081A2 2 0 014 34V9a1 1 0 00-1-1H1a1 1 0 00-1 1v25a6 6 0 006 6h36a6 6 0 006-6V6a2 2 0 00-2-2zm-4 32H12V8h32v26a2 2 0 01-2 2z"/>
<path d="M30 28h10v4H30zm0-8h10v4H30zm0-8h10v4H30zm-14 0h10v12H16zm0 16h10v4H16z"/>
    </svg>