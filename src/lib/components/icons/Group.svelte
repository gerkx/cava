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
        <path d="M44 10V6a2 2 0 00-2-2h-4a2 2 0 00-2 2H12a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2v24a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2h24a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2V12a2 2 0 002-2zm-6 26a2 2 0 00-2 2H12a2 2 0 00-2-2V12a2 2 0 002-2h24a2 2 0 002 2z"/>
<path d="M30 18v-2a2 2 0 00-2-2H16a2 2 0 00-2 2v12a2 2 0 002 2h2V18z"/>
<path d="M32 20H20v12a2 2 0 002 2h10a2 2 0 002-2V22a2 2 0 00-2-2z"/>
    </svg>