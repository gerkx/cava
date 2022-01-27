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
        <path d="M24.1 36A11.9 11.9 0 1036 24.1 11.9 11.9 0 0024.1 36zm3.9-1.5a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5z"/>
<path d="M20.1 36a15.806 15.806 0 012.175-8H20v-8h8v2.275a15.809 15.809 0 014-1.648V20h8v.627a15.809 15.809 0 014 1.648V6a2 2 0 00-2-2H6a2 2 0 00-2 2v36a2 2 0 002 2h16.275a15.806 15.806 0 01-2.175-8zM32 8h8v8h-8zM20 8h8v8h-8zm-4 20H8v-8h8zm0-12H8V8h8z"/>
    </svg>