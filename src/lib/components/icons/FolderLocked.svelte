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
        <path d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zM20 33a5 5 0 012.037-4.025A13.973 13.973 0 0144 18.535V16a2 2 0 00-2-2H4v26a2 2 0 002 2h14z"/>
<path d="M46 32v-1.609c0-5.186-4.205-10.061-9.382-10.372A10 10 0 0026 30v2a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V34a2 2 0 00-2-2zm-16-2a6 6 0 0112 0v2H30zm8 10.222V43a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.778a3 3 0 114 0z"/>
    </svg>