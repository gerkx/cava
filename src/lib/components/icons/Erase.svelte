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
        <path d="M26.851 35.422a2.47 2.47 0 003.494 0l15.039-15.038a2.472 2.472 0 000-3.5L32.176 3.681a2.459 2.459 0 00-3.518.025c-4.087 4.247-10.883 10.813-15.09 14.916a2.458 2.458 0 00-.011 3.506l.193.193-7.65 7.65a3.758 3.758 0 000 5.315l7.6 7.6A3.788 3.788 0 0016.025 44H44a1 1 0 001-1v-2a1 1 0 00-1-1H21.889l4.77-4.77zm-11.17 4.344l-7.065-7a.2.2 0 010-.278l7.651-7.652 7.875 7.874-7.05 7.05a1 1 0 01-1.411.006z"/>
    </svg>