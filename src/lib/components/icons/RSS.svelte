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
        <circle cx="10.154" cy="37.846" r="6.154"/>
<path d="M29.3 44h-3.975a1.9 1.9 0 01-2.025-1.668A19.572 19.572 0 005.724 24.7a1.971 1.971 0 01-1.757-2v-4a2.06 2.06 0 012.25-2A27.434 27.434 0 0131.3 41.8a2.023 2.023 0 01-2 2.2z"/>
<path d="M43.941 44.091h-3.954a2.021 2.021 0 01-2.044-1.942A34.188 34.188 0 005.9 10.056a2.021 2.021 0 01-1.941-2.019V4.059A2.032 2.032 0 016.06 2.05a42.06 42.06 0 0139.89 39.89 2.075 2.075 0 01-2.009 2.151z"/>
    </svg>