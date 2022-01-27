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
        <path d="M24 36h-8v-4h8v-4h-8v-4h24V6a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h22zM4 8h32v12H4zm8 28H4V24h8z"/>
<path d="M47.688 41.688l-6.826-6.826 5.972-6.011a.5.5 0 00-.357-.85H28v18.641a.5.5 0 00.854.358l6.008-6.139 6.826 6.826a1 1 0 001.414 0l4.586-4.587a1 1 0 000-1.412z"/>
    </svg>