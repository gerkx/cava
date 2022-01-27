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
        <path d="M36 24a12 12 0 1012 12 12 12 0 00-12-12zm6 14.48a.594.594 0 01-1.015.42l-2.528-2.529-5.336 5.336a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l5.336-5.336-2.529-2.528A.594.594 0 0133.52 30h8.126a.354.354 0 01.354.354zM26 0v10h10L26 0z"/>
<path d="M20 36a16 16 0 0116-16v-6H24a2 2 0 01-2-2V0H6a2 2 0 00-2 2v36a2 2 0 002 2h14.524A15.974 15.974 0 0120 36z"/>
    </svg>