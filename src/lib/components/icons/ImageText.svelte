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
        <path d="M37.406 14a3.5 3.5 0 11-3.5-3.5 3.5 3.5 0 013.5 3.5zM25 24a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-3h6v16h-3a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1h-3V28h6v3a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1z"/>
<path d="M42 4H6a2 2 0 00-2 2v28a2 2 0 002 2h14V24a3.983 3.983 0 012.166-3.535l-3.643-3.642a2 2 0 00-2.828 0L8 24.518V8h32v12h4V6a2 2 0 00-2-2z"/>
    </svg>