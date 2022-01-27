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
        <path d="M45.7 42.3l-7.161-7.161a10.1 10.1 0 10-3.395 3.395L42.3 45.7c.469.469 2.5.89 3.394 0a2.444 2.444 0 00.006-3.4zM23.8 30a6.2 6.2 0 116.2 6.2 6.2 6.2 0 01-6.2-6.2z"/>
<path d="M17.365 36H8V8h28v9.365a14.024 14.024 0 014 2.846V6a2 2 0 00-2-2H6a2 2 0 00-2 2v32a2 2 0 002 2h14.211a14.024 14.024 0 01-2.846-4z"/>
    </svg>