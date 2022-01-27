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
        <ellipse cx="24" cy="10.25" rx="20" ry="6.25"/>
<path d="M24 32.158c-6.17 0-17.765-1.461-20-5.006v10.6C4 41.2 12.954 44 24 44s20-2.8 20-6.25v-10.6c-3.059 3.871-13.83 5.008-20 5.008z"/>
<path d="M24 20.5c-6.17 0-17.765-1.461-20-5v6.471c0 3.451 8.954 6.25 20 6.25s20-2.8 20-6.25V15.5c-3.059 3.865-13.83 5-20 5z"/>
    </svg>