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
        <path d="M42 2H6a2 2 0 00-2 2v8a2 2 0 002 2h36a2 2 0 002-2V4a2 2 0 00-2-2zm-7 9.5l-4.317-4.68a.5.5 0 01.385-.82h7.864a.5.5 0 01.385.82zm7 6.5H6a2 2 0 00-2 2v24a2 2 0 002 2h36a2 2 0 002-2V20a2 2 0 00-2-2zM8 23a1 1 0 011-1h30a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1zm32 18a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1h30a1 1 0 011 1zm-4-8a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1h26a1 1 0 011 1z"/>
    </svg>