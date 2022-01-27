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
        <path d="M14 2v10H4L14 2z"/>
<path d="M14 32a13.989 13.989 0 0118-13.413V4a2 2 0 00-2-2H18v12a2 2 0 01-2 2H4v20a2 2 0 002 2h9.365A13.921 13.921 0 0114 32z"/>
<path d="M43.26 43.865l-6.723-6.723a10.1 10.1 0 10-3.395 3.395l6.723 6.723c.469.469 2.5.89 3.395 0a2.445 2.445 0 000-3.395zM21.8 32a6.2 6.2 0 116.2 6.2 6.2 6.2 0 01-6.2-6.2z"/>
    </svg>