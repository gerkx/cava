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
        <rect height="4" rx="1" ry="1" width="4" x="20" y="14"/>
<rect height="4" rx="1" ry="1" width="4" x="12" y="14"/>
<rect height="4" rx="1" ry="1" width="4" x="4" y="14"/>
<rect height="4" rx="1" ry="1" width="4" x="28" y="22"/>
<rect height="4" rx="1" ry="1" width="4" x="28" y="38"/>
<rect height="4" rx="1" ry="1" width="4" x="28" y="30"/>
<path d="M5.034 4.009A1.023 1.023 0 004 5.021v2a1 1 0 00.991.988C15.342 8.19 22.745 11.223 28 15.6V17a1 1 0 001 1h1.543c6.512 6.909 8.858 16.075 9.349 23.077a.985.985 0 00.989.923h2a1 1 0 001.007-1.053C42.938 26.813 35.1 4.508 5.034 4.009z"/>
    </svg>