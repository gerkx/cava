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
        <path d="M24 7.9A16.1 16.1 0 117.9 24 16.118 16.118 0 0124 7.9zm0-3.8A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1z"/>
<path d="M21.56 14.747a2.24 2.24 0 014.48 0 2.084 2.084 0 01-2.24 2.24 2.116 2.116 0 01-2.24-2.24zM27.5 32H26V21a1 1 0 00-1-1h-4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H22v10h-1.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z"/>
    </svg>