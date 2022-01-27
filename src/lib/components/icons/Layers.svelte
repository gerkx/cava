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
        <path d="M36.977 26.447l-12.411 8.611a.993.993 0 01-1.132 0l-12.411-8.611-7.166 4.972a.5.5 0 000 .821l19.577 13.583a.993.993 0 001.132 0L44.143 32.24a.5.5 0 000-.821z"/>
<path d="M23.434 30.164L3.858 16.581a.5.5 0 010-.821L23.434 2.177a.993.993 0 011.132 0L44.142 15.76a.5.5 0 010 .821L24.566 30.164a.99.99 0 01-1.132 0z"/>
    </svg>