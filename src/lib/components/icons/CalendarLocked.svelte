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
        <path d="M45 32h-1v-2a10 10 0 00-20 0v2h-1a1 1 0 00-1 1v14a1 1 0 001 1h22a1 1 0 001-1V33a1 1 0 00-1-1zm-17-2a6 6 0 0112 0v2H28zm8 10.221V43a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.779a3 3 0 114 0z"/>
<path d="M40 6h-6V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H14V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H4a2 2 0 00-2 2v26a2 2 0 002 2h14v-3a4.92 4.92 0 01.121-1H6V10h4v1a1 1 0 001 1h2a1 1 0 001-1v-1h16v1a1 1 0 001 1h2a1 1 0 001-1v-1h4v6.583a13.92 13.92 0 014 1.951V8a2 2 0 00-2-2z"/>
    </svg>