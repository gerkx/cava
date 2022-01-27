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
        <path d="M24 16l8-8 8 8-8 8zM33.32 27.73l10.41-10.41a1.052 1.052 0 011.487 0l1.485 1.484a1.052 1.052 0 010 1.488l-10.409 10.41a1.051 1.051 0 01-1.485.002l-1.485-1.484a1.052 1.052 0 01-.003-1.49zM17.338 11.748l10.41-10.41a1.052 1.052 0 011.488 0l1.485 1.485a1.051 1.051 0 010 1.487L20.309 14.72a1.052 1.052 0 01-1.487 0l-1.485-1.485a1.052 1.052 0 010-1.488zM5.414 45.414l-2.828-2.828a2 2 0 010-2.828L24 20l4 4L8.242 45.414a2 2 0 01-2.828 0zM46 42v-2a2 2 0 00-2-2H32a2 2 0 00-2 2v2h-1a1 1 0 00-1 1v2a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1z"/>
    </svg>