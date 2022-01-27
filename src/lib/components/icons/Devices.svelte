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
        <path d="M22 32H6V8h32v2h4V8a4 4 0 00-4-4H4a4 4 0 00-4 4v24a4 4 0 004 4h18zM3 22.5a2.5 2.5 0 010-5 2.5 2.5 0 110 5z"/>
<path d="M44 14H28a2 2 0 00-2 2v30a2 2 0 002 2h16a2 2 0 002-2V16a2 2 0 00-2-2zm-9 2h2a1 1 0 010 2h-2a1 1 0 010-2zm1 31.1a2.1 2.1 0 112.1-2.1 2.1 2.1 0 01-2.1 2.1zm8-5.1H28V20h16z"/>
    </svg>