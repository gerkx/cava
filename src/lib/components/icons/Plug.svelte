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
        <path d="M4.3 35.408a8.8 8.8 0 010-12.445l6.223-6.223a2.934 2.934 0 010-4.148l4.148-4.148a2.934 2.934 0 014.148 0l2.074 2.074 9.334-9.334a1.467 1.467 0 012.074 0l2.074 2.074a1.467 1.467 0 010 2.074l-9.334 9.334 8.3 8.3 9.334-9.334a1.467 1.467 0 012.074 0l2.067 2.068a1.467 1.467 0 010 2.074l-9.334 9.334 2.074 2.074a2.934 2.934 0 010 4.148l-4.148 4.148a2.934 2.934 0 01-4.148 0L25.037 43.7a8.8 8.8 0 01-12.445 0z"/>
    </svg>