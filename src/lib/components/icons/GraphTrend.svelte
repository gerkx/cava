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
        <path d="M42.181 9.083l-7.749 11.07L28.6 8.5a1 1 0 00-1.834.106l-7.224 22.328-6.713-6.346a1 1 0 00-1.347-.061L4.36 30.463a1 1 0 00-.36.768v2.575a1 1 0 001.64.768l6.176-5.146 8.284 8.284a1 1 0 001.647-.365l6.51-19.71 4.562 10.079a1 1 0 001.714.126l9.288-13.269A1 1 0 0044 14V9.657a1 1 0 00-1.819-.574z"/>
    </svg>