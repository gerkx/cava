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
        <path d="M23.105 32.025a2.006 2.006 0 001.79 0L40 24.472V30c0 4.418-7.163 10-16 10a20.292 20.292 0 01-12-3.845v-9.683z"/>
<path d="M4 18l-2.211-1.106a1 1 0 010-1.788L23.106 4.447a2 2 0 011.788 0l21.317 10.659a1 1 0 010 1.788L24.89 27.555a2 2 0 01-1.782 0L12.315 22.21l9.29-4.82A4.879 4.879 0 0024 18c2.209 0 4-1.343 4-3s-1.791-3-4-3a4.1 4.1 0 00-3.739 1.963L8 20v15.02a29.99 29.99 0 00.586 5.9l1.374 4.69A2 2 0 018 48H4a2 2 0 01-1.958-2.409l1.39-4.716A30.006 30.006 0 004 35.07z"/>
    </svg>