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
        <path d="M39.755 25.511L44 34v8a2 2 0 01-2 2H6a2 2 0 01-2-2V24l12.5 15 4.2-6.294a1 1 0 011.646-.027l5.404 7.571 10.289-14.861a1 1 0 011.716.122z"/>
<path d="M16.144 32.324l2.832-4.248A3 3 0 0123.913 28l3.787 5.3 8.974-12.962a3 3 0 015.15.366L44 25.055V4L34 16l-5.235-8.725a1 1 0 00-1.658-.085L11.993 27.343z"/>
    </svg>