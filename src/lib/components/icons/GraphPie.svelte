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
        <path d="M4 24a20 20 0 0016.86 19.753 1 1 0 001.14-1V25.591a1 1 0 00-.439-.828l-14.2-9.624a1 1 0 00-1.462.378A19.837 19.837 0 004 24zm5.619-12.165l10.82 7.335A1 1 0 0022 18.342V5.251a1.008 1.008 0 00-1.143-1A19.934 19.934 0 009.43 10.33a1 1 0 00.189 1.505zM27.14 4.247a1 1 0 00-1.14 1v17.692l.051.035-.051.076v19.7a1 1 0 001.14 1 20 20 0 000-39.505z"/>
    </svg>