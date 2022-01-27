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
        <path d="M30.346 21.19A15.834 15.834 0 0136.1 20.1c.26 0 .514.026.771.039a16.135 16.135 0 001.267-6.011c0-6.048-2.954-8.9-7.418-8.9a8.325 8.325 0 00-2.288.338c1.729 2.17 2.851 5.273 2.851 9.552a21.166 21.166 0 01-.937 6.072zM20.2 36a18.727 18.727 0 014.262-11.419 16.805 16.805 0 002.979-9.465c0-6.72-3.282-9.89-8.241-9.89s-8.336 3.317-8.336 9.89a16.924 16.924 0 003.126 9.469 1.943 1.943 0 01.435 1.2v2.683a1.947 1.947 0 01-1.67 1.887C2.071 31.494 0 38.7 0 41.6V44h22.375a15.8 15.8 0 01-2.175-8z"/>
<path d="M36.1 24.1A11.9 11.9 0 1048 36a11.9 11.9 0 00-11.9-11.9zm8 13.4a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"/>
    </svg>