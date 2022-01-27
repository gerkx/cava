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
        <path d="M20.461 32.648a2.556 2.556 0 01-.462.093 2.683 2.683 0 010-5.365 2.637 2.637 0 012.044 1 15.943 15.943 0 019.273-7.576l-9.75-17.724a1.789 1.789 0 00-3.134 0L1.787 33.34a1.788 1.788 0 001.567 2.65H20.1a15.93 15.93 0 01.361-3.342zm-2.607-20.8a.894.894 0 01.894-.894h2.5a.894.894 0 01.894.894v12.519a.894.894 0 01-.894.894h-2.5a.894.894 0 01-.894-.894z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.132a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.478 43.9a.5.5 0 01-.707 0z"/>
    </svg>