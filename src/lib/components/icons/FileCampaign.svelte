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
        <path d="M28 4v12h12L28 4z"/>
<path d="M26 39a13 13 0 0113-13c.338 0 .669.025 1 .051V20H26a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h17a12.949 12.949 0 01-1-5z"/>
<path d="M36.5 39a2.5 2.5 0 112.5 2.5 2.5 2.5 0 01-2.5-2.5zm8.4-1H48a9.144 9.144 0 00-8-8v3.1a5.98 5.98 0 014.9 4.9zM30 38h3.1a5.98 5.98 0 014.9-4.9V30a9.144 9.144 0 00-8 8zm10 6.9V48a9.144 9.144 0 008-8h-3.1a5.98 5.98 0 01-4.9 4.9zM33.1 40H30a9.144 9.144 0 008 8v-3.1a5.98 5.98 0 01-4.9-4.9z"/>
    </svg>