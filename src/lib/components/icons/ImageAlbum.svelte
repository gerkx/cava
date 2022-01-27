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
        <path d="M37 20.7a3.7 3.7 0 10-3.7-3.7 3.7 3.7 0 003.7 3.7z"/>
<path d="M46 6H6a2 2 0 00-2 2v4H1a1 1 0 00-1 1v2a1 1 0 001 1h3v16H1a1 1 0 00-1 1v2a1 1 0 001 1h3v4a2 2 0 002 2h40a2 2 0 002-2V8a2 2 0 00-2-2zM10 35a1 1 0 01-1 1H6v-4h3a1 1 0 011 1zm0-20a1 1 0 01-1 1H6v-4h3a1 1 0 011 1zm34 19.809l-6.4-6.4a2.427 2.427 0 00-3.434 0l-3.729 3.729-9.176-9.176a2.43 2.43 0 00-3.435 0L12 28.786V10h32z"/>
    </svg>