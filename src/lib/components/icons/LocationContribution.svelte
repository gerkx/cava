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
        <path d="M4 10v28a2 2 0 002 2h36a2 2 0 002-2V10a2 2 0 00-2-2H6a2 2 0 00-2 2zm4 2h24v16H8zm0 24v-4h24v4zm32 0h-4V12h4z"/>
<path d="M24.732 14.536l-5.582 7.975-3.2-2.9a.5.5 0 00-.706.035l-1.121 1.238a.5.5 0 00.035.706l4.792 4.339a.777.777 0 001.159-.131l6.812-9.734a.5.5 0 00-.123-.7l-1.368-.958a.5.5 0 00-.698.13z"/>
    </svg>