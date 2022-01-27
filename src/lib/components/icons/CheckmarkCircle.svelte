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
        <path d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm12.562 12.587L22.018 35.341a1.206 1.206 0 01-.875.461h-.073a1.2 1.2 0 01-.849-.351l-7.785-7.8a1.2 1.2 0 010-1.7l1.326-1.325a1.2 1.2 0 011.7 0l5.338 5.356 12.408-15.9a1.2 1.2 0 011.692-.212L36.352 15a1.2 1.2 0 01.21 1.687z"/>
    </svg>