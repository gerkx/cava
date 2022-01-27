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
        <path d="M24 2a22 22 0 1022 22A22 22 0 0024 2zm13.155 34.246a13.317 13.317 0 00-6.998-3.116 1.692 1.692 0 01-1.464-1.697v-2.45a1.7 1.7 0 01.431-1.092 12.93 12.93 0 002.951-8.07c0-6.109-3.246-9.523-8.135-9.523s-8.228 3.541-8.228 9.523a13.074 13.074 0 003.084 8.074 1.695 1.695 0 01.43 1.092v2.437a1.682 1.682 0 01-1.475 1.696 13.29 13.29 0 00-7 3.021 18 18 0 1126.404.105z"/>
    </svg>