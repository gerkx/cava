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
        <path d="M4.5 28H18a1 1 0 001-1.007.978.978 0 00-.295-.7l-4.536-4.536a14.067 14.067 0 0111.585-6.013A12.27 12.27 0 0137.967 27.1a.988.988 0 001 .9l4.011-.008a.992.992 0 001-1.029A18.268 18.268 0 0025.756 9.744a19.76 19.76 0 00-15.877 7.721l-4.172-4.172a.978.978 0 00-.7-.295A1 1 0 004 14v13.5a.5.5 0 00.5.5z"/>
<rect height="4" rx="1" ry="1" width="40" x="4" y="34"/>
    </svg>