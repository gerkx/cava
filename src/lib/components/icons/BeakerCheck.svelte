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
        <path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.478 43.9a.5.5 0 01-.707 0z"/>
<path d="M20.1 36a15.81 15.81 0 011.652-7.026L12.272 32l4.78-11.3A12 12 0 0018 16.022V8h8v8.059a12 12 0 00.919 4.607l.752 1.808a15.789 15.789 0 013.544-1.639l-.568-1.326A8 8 0 0130 16.358V8a2 2 0 002-2V4a2 2 0 00-2-2H14a2 2 0 00-2 2v2a2 2 0 002 2v8.358a8 8 0 01-.647 3.151L4.389 40.424A4 4 0 008.066 46h15.579A15.826 15.826 0 0120.1 36z"/>
    </svg>