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
        <path d="M20 4v12H8L20 4z"/>
<path d="M16 31a5 5 0 015-5h3.139a4.969 4.969 0 011.186-2.348L34 14.029l6 6.645V6a2 2 0 00-2-2H24v14a2 2 0 01-2 2H8v22a2 2 0 002 2h6z"/>
<path d="M48 31v16a1 1 0 01-1 1H21a1 1 0 01-1-1V31a1 1 0 011-1h7v4h-4v10h20V34h-4v-4h7a1 1 0 011 1zm-8.278-4.669L34 20l-5.708 6.331A1 1 0 0029.035 28H32v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V28h2.979a1 1 0 00.743-1.669z"/>
    </svg>