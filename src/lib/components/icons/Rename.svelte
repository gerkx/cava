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
        <rect height="44" rx=".5" ry=".5" width="2" x="38" y="2"/>
<path d="M12.823 31.3L9.117 41.69a.36.36 0 01-.411.31h-3.5c-.255 0-.36-.155-.31-.41l11.219-31.224a5.529 5.529 0 00.361-2.111.241.241 0 01.255-.255h5.043c.2 0 .255.05.3.255L34.167 41.64c.1.2.054.36-.206.36h-3.907a.462.462 0 01-.411-.255L25.886 31.3zm11.882-3.958C23.57 24 20.333 14.994 19.353 11.5H19.3c-.876 3.292-3.343 10.186-5.3 15.844z"/>
    </svg>