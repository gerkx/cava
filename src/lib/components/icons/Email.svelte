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
        <path d="M23.685 26.755a.54.54 0 00.632 0L48 9.387V8a2.1 2.1 0 00-2.182-2H2.182A2.1 2.1 0 000 8v1.387zM48 14.162l-13.193 9.675L48 31.092v-16.93z"/>
<path d="M31.419 26.321l-4.562 3.346a5.012 5.012 0 01-5.712 0L16.56 26.3 0 35.437V38a2.1 2.1 0 002.182 2h43.636A2.1 2.1 0 0048 38v-2.561zm-18.247-2.502L0 14.161v16.928l13.172-7.27z"/>
    </svg>