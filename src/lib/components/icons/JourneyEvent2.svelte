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
        <path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm0 20.8a8.887 8.887 0 01-1.5-17.649v9.37l3.688 3.688a.5.5 0 00.708 0L40.31 38.9a.5.5 0 000-.707l-2.81-2.814v-8.128A8.887 8.887 0 0136 44.9z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm0 20.8a8.887 8.887 0 01-1.5-17.649v9.37l3.688 3.688a.5.5 0 00.708 0L40.31 38.9a.5.5 0 000-.707l-2.81-2.814v-8.128A8.887 8.887 0 0136 44.9z"/>
<path d="M20 34a7.991 7.991 0 00.055.908A15.916 15.916 0 0124 25.441V14a4 4 0 014-4h6.349a6 6 0 100-4H28a8 8 0 00-8 8v8h-6.349a6 6 0 100 4H20zM40 5.6A2.4 2.4 0 1137.6 8 2.4 2.4 0 0140 5.6zM8 26.4a2.4 2.4 0 112.4-2.4A2.4 2.4 0 018 26.4z"/>
    </svg>