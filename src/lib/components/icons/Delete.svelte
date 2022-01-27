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
        <path d="M41 8h-7V6a4 4 0 00-4-4H18a4 4 0 00-4 4v2H7a1 1 0 00-1 1v2a1 1 0 001 1h1.2l2 30a2 2 0 002 2h23.6a2 2 0 002-2l2-30H41a1 1 0 001-1V9a1 1 0 00-1-1zM18 6h12v2H18zm-1.24 31.974a2 2 0 01-2.134-1.857L13.383 18.16a2 2 0 013.991-.277l1.243 17.957a2 2 0 01-1.857 2.134zM26 36a2 2 0 01-4 0V18a2 2 0 014 0zm7.374.117a2 2 0 01-3.991-.277l1.243-17.957a2 2 0 013.991.277z"/>
    </svg>