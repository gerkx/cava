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
        <path d="M38 0H10a6 6 0 00-6 6v28a4 4 0 004 4h32a4 4 0 004-4V6a6 6 0 00-6-6zM11 34a3 3 0 113-3 3 3 0 01-3 3zm26 0a3 3 0 113-3 3 3 0 01-3 3zm3-14a4 4 0 01-4 4H12a4 4 0 01-4-4V4h32zm-8 20l1 2H15l1-2h-4l-4 8h4l2-4h20l2 4h4l-4-8h-4z"/>
<path d="M38 0H10a6 6 0 00-6 6v28a4 4 0 004 4h32a4 4 0 004-4V6a6 6 0 00-6-6zM11 34a3 3 0 113-3 3 3 0 01-3 3zm26 0a3 3 0 113-3 3 3 0 01-3 3zm3-14a4 4 0 01-4 4H12a4 4 0 01-4-4V4h32zm-8 20l1 2H15l1-2h-4l-4 8h4l2-4h20l2 4h4l-4-8h-4z"/>
    </svg>