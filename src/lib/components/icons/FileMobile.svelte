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
        <path d="M16 4v12H4L16 4zm26 10H30a2 2 0 00-2 2v26a2 2 0 002 2h12a2 2 0 002-2V16a2 2 0 00-2-2zm-7 2h2a1 1 0 010 2h-2a1 1 0 010-2zm1 27.1a2.1 2.1 0 112.1-2.1 2.1 2.1 0 01-2.1 2.1zm6-5.1H30V20h12z"/>
<path d="M24 42V16a6.007 6.007 0 016-6h6V6a2 2 0 00-2-2H20v14a2 2 0 01-2 2H4v22a2 2 0 002 2h18.369A5.919 5.919 0 0124 42z"/>
    </svg>