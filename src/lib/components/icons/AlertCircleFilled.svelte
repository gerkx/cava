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
        <path d="M24 4a20 20 0 1020 20A20 20 0 0024 4zm-2.86 6.955a.594.594 0 01.278-.588 7.4 7.4 0 012.563-.517 8.042 8.042 0 012.594.391.666.666 0 01.332.589v2.981c0 3.518-.7 13.231-.83 14.511 0 .242-.155.385-.439.385h-3.313a.418.418 0 01-.435-.365c-.12-1.62-.75-11.05-.75-14.406zm2.841 27.2a2.872 2.872 0 01-3.131-2.926 2.97 2.97 0 013.131-3.006 2.938 2.938 0 013.132 3.006 2.843 2.843 0 01-3.132 2.921z"/>
    </svg>