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
        <path d="M20.27 38H6l4-20h33.561l-.852 3.406a15.886 15.886 0 013.4 2.135l1.763-7.056A2 2 0 0045.938 14h-3.377v-2a2 2 0 00-2-2h-15.3l-4.839-4.832A4 4 0 0017.6 4H6a4 4 0 00-4 4v32a2 2 0 002 2h17.359a15.769 15.769 0 01-1.089-4z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm0 20.8a8.887 8.887 0 01-1.5-17.649v9.37l3.688 3.688a.5.5 0 00.708 0L40.31 38.9a.5.5 0 000-.707l-2.81-2.814v-8.128A8.887 8.887 0 0136 44.9z"/>
    </svg>