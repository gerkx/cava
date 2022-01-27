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
        <path d="M4 5.818v36.364A1.818 1.818 0 005.818 44h36.364A1.818 1.818 0 0044 42.182V5.818A1.818 1.818 0 0042.182 4H5.818A1.818 1.818 0 004 5.818zM40 40H8V8h32z"/>
<path d="M21.115 10H10v11.115A14.31 14.31 0 0121.115 10zM38 21.115V10H26.885A14.31 14.31 0 0138 21.115zM26.885 38H38V26.885A14.31 14.31 0 0126.885 38zM10 26.885V38h11.115A14.31 14.31 0 0110 26.885z"/>
    </svg>