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
        <path d="M28 4v12h12L28 4z"/>
<path d="M26 20a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zm-6.256 17.219a1 1 0 01-.814 1.58h-2.012a1 1 0 01-.8-.4L12.068 33l4.049-5.4a1 1 0 01.8-.4h2.013a1 1 0 01.814 1.58L16.738 33zm9-12.742l-4.847 16.8a1 1 0 01-.961.723h-1.6a1 1 0 01-.961-1.277l4.847-16.8a1 1 0 01.961-.723h1.6a1 1 0 01.958 1.277zM33.2 38.4a1 1 0 01-.8.4h-2.012a1 1 0 01-.814-1.58L32.58 33l-3.007-4.219a1 1 0 01.814-1.58H32.4a1 1 0 01.8.4L37.25 33z"/>
    </svg>