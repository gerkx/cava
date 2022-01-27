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
        <path d="M33.974 42.88v.059A1.062 1.062 0 0132.912 44H1.084a1.064 1.064 0 01-1-1.119C.784 35.249 8.608 32.652 11 32.44c1.751-.153 1.778-1.56 1.778-3.315a15.973 15.973 0 01-3.752-9.518c0-5.765 3.281-9.607 8-9.607s8 3.842 8 9.607a15.968 15.968 0 01-3.753 9.518c0 1.755.028 3.162 1.775 3.315 2.399.208 10.223 2.809 10.926 10.44zM32.5 10h15a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5V6h-2a2 2 0 00-2 2v6a2 2 0 002 2h2v1.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5V14h-2V8h2v1.5a.5.5 0 00.5.5z"/>
    </svg>