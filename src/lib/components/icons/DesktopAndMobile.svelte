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
        <path d="M24 28H4V8h34v2h4V6a2 2 0 00-2-2H2a2 2 0 00-2 2v24a2 2 0 002 2h14v4a2.006 2.006 0 01-2 2h-3a1 1 0 00-1 1v2a1 1 0 001 1h13z"/>
<path d="M46 14H30a2 2 0 00-2 2v30a2 2 0 002 2h16a2 2 0 002-2V16a2 2 0 00-2-2zm-9 2h2a1 1 0 010 2h-2a1 1 0 010-2zm1 31.1a2.1 2.1 0 112.1-2.1 2.1 2.1 0 01-2.1 2.1zm8-5.1H30V20h16z"/>
    </svg>