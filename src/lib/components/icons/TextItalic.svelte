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
        <path d="M42.551 6h-30a3.162 3.162 0 00-2.727 2l-2.548 7a.677.677 0 00.636 1h2a1.583 1.583 0 001.364-1l1.82-5h10L12.9 38h-3a1.583 1.583 0 00-1.36 1l-.727 2a.676.676 0 00.636 1h12a1.584 1.584 0 001.364-1l.727-2a.677.677 0 00-.636-1h-3L29.1 10h10l-1.82 5a.677.677 0 00.636 1h2a1.583 1.583 0 001.364-1l2.548-7a1.354 1.354 0 00-1.277-2z"/>
    </svg>