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
        <path d="M36 10v10.1a15.869 15.869 0 015.453.96A2.49 2.49 0 0042 19.5v-15A2.5 2.5 0 0039.5 2h-15A2.5 2.5 0 0022 4.5V8h12a2 2 0 012 2zM20.1 36a15.827 15.827 0 011.9-7.543V24.5a2.5 2.5 0 00-2.5-2.5h-15A2.5 2.5 0 002 24.5v15A2.5 2.5 0 004.5 42h15a2.486 2.486 0 001.56-.547A15.886 15.886 0 0120.1 36z"/>
<path d="M26 20v3.639a15.845 15.845 0 016-3.031V14.5a2.5 2.5 0 00-2.5-2.5h-15a2.5 2.5 0 00-2.5 2.5V18h12a2 2 0 012 2zm10.1 4.2A11.9 11.9 0 1048 36.1a11.9 11.9 0 00-11.9-11.9zM33.872 44l-6.133-6.133a.5.5 0 010-.707l1.761-1.765a.5.5 0 01.707 0l3.893 3.892 8.94-8.939a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.579 44a.5.5 0 01-.707 0z"/>
    </svg>