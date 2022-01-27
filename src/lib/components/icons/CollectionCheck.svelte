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
        <path d="M20.627 38H18V26h4.275a15.959 15.959 0 013.315-4H18V10h10v10.275a15.8 15.8 0 014-1.648V10h10v9.28a15.864 15.864 0 014 2.365V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h20.275a15.8 15.8 0 01-1.648-4zM14 38H4V26h10zm0-16H4V10h10z"/>
<path d="M36 22.1A11.9 11.9 0 1047.9 34 11.9 11.9 0 0036 22.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 33.3a.5.5 0 01.707 0L34 37.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 41.9a.5.5 0 01-.708 0z"/>
    </svg>