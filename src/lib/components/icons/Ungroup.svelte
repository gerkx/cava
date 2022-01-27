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
        <rect height="8" rx="2" ry="2" width="8" x="28" y="28"/>
<path d="M45 26a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v1H26v-1a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1h1v12h-1a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-1h12v1a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-1V26zm-5 12h-1a1 1 0 00-1 1v1H26v-1a1 1 0 00-1-1h-1V26h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1z"/>
<path d="M14 24H8v-1a1 1 0 00-1-1H6V10h1a1 1 0 001-1V8h12v1a1 1 0 001 1h1v4h4v-4h1a1 1 0 001-1V3a1 1 0 00-1-1h-6a1 1 0 00-1 1v1H8V3a1 1 0 00-1-1H1a1 1 0 00-1 1v6a1 1 0 001 1h1v12H1a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-1h6z"/>
<path d="M14 16a2 2 0 012-2h2a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2h2z"/>
    </svg>