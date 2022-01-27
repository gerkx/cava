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
        <path d="M0 42a2 2 0 002 2h4a2 2 0 002-2V23.079l-8 6.668zm12 0a2 2 0 002 2h4a2 2 0 002-2V28.647l-8-8zm12 0a2 2 0 002 2h4a2 2 0 002-2V27.659L24 34zm16.041-20.4L36 24.643V42a2 2 0 002 2h4a2 2 0 002-2V22.486a5.018 5.018 0 01-1.008.1 4.936 4.936 0 01-2.951-.986z"/>
<path d="M32.414 6.489a1 1 0 00-.707 1.711l3.327 3.327-9.334 7.852L12.892 6.568a1 1 0 00-1.347-.061L0 16.126v8.414l11.754-9.8 12.6 12.6a1 1 0 001.31.091L39.41 15.9l2.883 2.883A1 1 0 0044 18.075V6.489z"/>
    </svg>