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
        <rect height="24" rx="2" ry="2" width="28" x="10" y="12"/>
<path d="M6 2.5V8H.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H10V2.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5zM42 8V2.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V12h9.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM0 36.5v3a.5.5 0 00.5.5H6v5.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V36H.5a.5.5 0 00-.5.5zM42 40h5.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H38v9.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5z"/>
    </svg>