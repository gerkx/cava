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
        <path d="M8 32H6V8h36v8l4-.875V6a2 2 0 00-2-2H4a2 2 0 00-2 2v28a2 2 0 002 2h11.392zm17.75 5.125l11.276 5.907a1 1 0 001.344-.446l8.916-20.729zm-3.67 2.125v7.639a.713.713 0 001.174.544l5.36-4.516z"/>
<path d="M45.478 20.135a.1.1 0 00-.084-.18l-30.878 9.952a.5.5 0 00-.08.926l7.917 3.953z"/>
    </svg>