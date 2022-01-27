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
        <path d="M36.663 32.639l6.53-6.53a1 1 0 000-1.415l-2.25-2.25a1 1 0 00-1.415 0l-6.53 6.53-6.53-6.53a1 1 0 00-1.414 0l-2.25 2.25a1 1 0 000 1.415l6.53 6.53-6.53 6.53a1 1 0 000 1.414l2.25 2.25a1 1 0 001.414 0l6.53-6.53 6.53 6.53a1 1 0 001.415 0l2.25-2.25a1 1 0 000-1.414zM28.64 4.857l-2.623-1.804a1 1 0 00-1.39.258L13.155 19.993 6.913 13.75a1 1 0 00-1.415 0L3.248 16a1 1 0 000 1.415l9.798 9.798a1 1 0 001.531-.14l14.32-20.826a1 1 0 00-.258-1.39z"/>
    </svg>