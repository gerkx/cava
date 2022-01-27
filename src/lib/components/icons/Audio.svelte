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
        <path d="M40.327.908L17.57 6.805A2.066 2.066 0 0016 8.742v23.712A8.535 8.535 0 0013.235 32a12.319 12.319 0 00-4.744 1c-4.76 2-7.462 6.377-6.034 9.764.947 2.247 3.474 3.5 6.458 3.5a12.3 12.3 0 004.744-1C17.677 43.567 20 40.2 20 37.143V13.172l18-4.72v18A8.535 8.535 0 0035.235 26a12.319 12.319 0 00-4.744 1c-4.76 2.005-7.462 6.377-6.034 9.764.947 2.247 3.474 3.5 6.458 3.5a12.3 12.3 0 004.744-1C39.677 37.567 42 34.2 42 31.143V2.156A1.349 1.349 0 0040.327.908z"/>
    </svg>