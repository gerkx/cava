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
        <path d="M36.559 23.851a1.754 1.754 0 01-1.5-1.7v-2.422a1.76 1.76 0 01.394-1.083 15.125 15.125 0 002.682-8.519c0-6.047-2.955-8.9-7.418-8.9a8.362 8.362 0 00-2.289.337c1.729 2.171 2.851 5.274 2.851 9.553a20.73 20.73 0 01-3.417 11.32v.369C37.706 24.6 41.816 31.42 42 36h6v-2.4c0-2.5-1.787-8.664-11.441-9.749z"/>
<path d="M25.681 26.365a1.949 1.949 0 01-1.656-1.886v-2.694a1.964 1.964 0 01.438-1.2 16.8 16.8 0 002.98-9.465c0-6.72-3.283-9.889-8.242-9.889s-8.336 3.317-8.336 9.889a16.927 16.927 0 003.126 9.469 1.952 1.952 0 01.435 1.2v2.682a1.817 1.817 0 01-.159.715L25.9 36.033 21.55 40H38v-2.4c0-2.782-1.59-10.024-12.319-11.235z"/>
<path d="M8.874 25.622a.5.5 0 00-.874.333V32H1a1 1 0 00-1 1v6a1 1 0 001 1h7v5.818a.5.5 0 00.874.332L20 36z"/>
    </svg>