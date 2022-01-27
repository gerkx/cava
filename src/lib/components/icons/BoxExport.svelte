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
        <path d="M18 46L1.028 36.572A2 2 0 010 34.823V18l18 10zM28.3 6.155l-7.348-3.978a2 2 0 00-1.905 0L.739 12.094a1.031 1.031 0 000 1.813l6.912 3.743zm10.96 5.939l-6.8-3.682-20.644 11.5L20 24.339l19.26-10.433a1.031 1.031 0 000-1.812zM35 24h5v-6L22 28v18l4-2.222V32a2 2 0 012-2h6v-5a1 1 0 011-1z"/>
<path d="M38 34v-5.341a.5.5 0 01.864-.343L48 38l-9.136 9.684a.5.5 0 01-.864-.343V42h-7a1 1 0 01-1-1v-6a1 1 0 011-1z"/>
    </svg>