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
        <path d="M36.552 25.448l8.1-8.1a2 2 0 000-2.828L33.477 3.352a2 2 0 00-2.829 0l-8.1 8.1a1 1 0 00-.286.594l-.675 5.883L2.663 36.852a2.264 2.264 0 000 3.2l5.283 5.283a2.264 2.264 0 003.2 0L30.074 26.41l5.884-.675a1 1 0 00.594-.287zm-14.146.145a3.4 3.4 0 114.808 0 3.4 3.4 0 01-4.809 0z"/>
    </svg>