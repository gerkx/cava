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
        <path d="M47.709 16.98L44.207 4.725A1 1 0 0043.246 4H4.754a1 1 0 00-.961.725L.29 16.98A.8.8 0 001.06 18h45.878a.8.8 0 00.77-1.02zM7 16H3L6 6h4zm9.5 0h-4L14 6h4zm9.5 0h-4V6h4zm5.5 0L30 6h4l1.5 10zm9.5 0L38 6h4l3 10zm3 4v22a2 2 0 01-2 2H18V20h4v12h18V20zM8 44H6a2 2 0 01-2-2V20h4zm6-15a2 2 0 11-2 2 2 2 0 012-2z"/>
    </svg>