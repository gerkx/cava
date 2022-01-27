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
        <rect height="12" rx="2" ry="2" width="28" x="10" y="30"/>
<path d="M29.906 4H18.094A8.094 8.094 0 0010 12.094V24a2 2 0 002 2h24a2 2 0 002-2V12.094A8.094 8.094 0 0029.906 4zM4 20a4 4 0 00-4 4v20a2 2 0 002 2h2a2 2 0 002-2V22a2 2 0 00-2-2zm40 0a4 4 0 014 4v20a2 2 0 01-2 2h-2a2 2 0 01-2-2V22a2 2 0 012-2z"/>
    </svg>