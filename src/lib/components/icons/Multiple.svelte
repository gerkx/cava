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
        <rect height="20" rx="2.5" ry="2.5" width="20" x="4" y="24"/>
<path d="M31.5 14h-15a2.5 2.5 0 00-2.5 2.5V20h12a2 2 0 012 2v12h3.5a2.5 2.5 0 002.5-2.5v-15a2.5 2.5 0 00-2.5-2.5z"/>
<path d="M41.5 4h-15A2.5 2.5 0 0024 6.5V10h12a2 2 0 012 2v12h3.5a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0041.5 4z"/>
    </svg>