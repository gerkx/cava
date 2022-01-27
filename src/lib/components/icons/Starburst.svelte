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
        <path d="M25.062 4.739l3.2 9.012 8.639-4.106a1.111 1.111 0 011.48 1.48l-4.101 8.639 9.012 3.2a1.111 1.111 0 010 2.094l-9.012 3.2 4.107 8.639a1.111 1.111 0 01-1.48 1.48l-8.64-4.097-3.2 9.012a1.111 1.111 0 01-2.094 0l-3.2-9.012-8.639 4.107a1.111 1.111 0 01-1.48-1.48l4.106-8.639-9.012-3.2a1.111 1.111 0 010-2.094l9.012-3.2-4.115-8.649a1.111 1.111 0 011.48-1.48l8.639 4.106 3.2-9.012a1.111 1.111 0 012.098 0z"/>
    </svg>