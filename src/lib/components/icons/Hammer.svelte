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
        <path d="M15.1 5.381L8.125 12.36a2 2 0 00.005 2.834l.472.453-2.074 2.161a1.331 1.331 0 00-1.913-.056l-2.129 2.13a1 1 0 000 1.414L8.13 26.94a1 1 0 001.415 0l2.129-2.129c.781-.781-.032-1.889-.032-1.889l2.186-2.108a2 2 0 002.811-.018l1.189-1.19L41 42.78a2 2 0 002.828 0l1.881-1.88a2 2 0 000-2.828L22.534 14.9l.776-.776a2 2 0 000-2.828l-.939-.939s2.763-3.1 3.343-3.682c2.441-2.441 7.846-.867 8.1-2.117S21.81-1.325 15.1 5.381z"/>
    </svg>