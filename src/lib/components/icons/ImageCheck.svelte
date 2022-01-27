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
        <circle cx="31.5" cy="16.404" r="3.094"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.187l8.939-8.939a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0z"/>
<path d="M48 25.689V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h19.244a15.808 15.808 0 011.384-14.481c-2.747-2.763-6.008-6.3-7.117-6.3C14.1 21.215 6.479 26.587 4 29.7V10h40v12.375a15.95 15.95 0 014 3.314z"/>
    </svg>