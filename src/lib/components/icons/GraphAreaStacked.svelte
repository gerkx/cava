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
        <path d="M39.743 22.564L44 31.078v12.5H4v-20l12.5 15 4.168-6.252a1 1 0 011.664 0l4.168 6.252L38.035 22.43a1 1 0 011.708.134z"/>
<path d="M16.144 32.324L19 28.033a3 3 0 014.992 0l2.617 3.926 10.1-14.136a3 3 0 015.124.4L44 22.555v-11.9l-4.141-6.21a1 1 0 00-1.68.025L26.5 23.156 22.332 16.9a1 1 0 00-1.664 0L16.5 23.156 4 8v9.751z"/>
    </svg>