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
        <path d="M41.321 43.926l-6.785-6.784a10.1 10.1 0 10-3.394 3.394l6.784 6.785c.469.468 2.5.889 3.395 0a2.446 2.446 0 000-3.395zM19.8 32a6.2 6.2 0 116.2 6.2 6.2 6.2 0 01-6.2-6.2zM44 28.008z"/>
<path d="M42 6H2a2 2 0 00-2 2v32a2 2 0 002 2h14.211a14.019 14.019 0 01-2.846-4H4V14h36v21.257l4 4V8a2 2 0 00-2-2z"/>
    </svg>