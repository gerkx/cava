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
        <path d="M36.1 24.1A11.9 11.9 0 1048 36a11.9 11.9 0 00-11.9-11.9zm8 13.4a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5zM31.539 20.772A1.963 1.963 0 0030 20h-4a2 2 0 00-2 2v3.7a15.9 15.9 0 017.539-4.928zM6 32a2 2 0 00-2 2v4h8v-4a2 2 0 00-2-2zM1 44h21.375a15.8 15.8 0 01-1.647-4H1a1 1 0 00-1 1v2a1 1 0 001 1zM42 6a2 2 0 00-2-2h-4a2 2 0 00-2 2v14.254a15.4 15.4 0 018 .989zM20 28h-4a2 2 0 00-2 2v8h6.339a16.091 16.091 0 01-.139-2 15.8 15.8 0 011.579-6.873A1.986 1.986 0 0020 28z"/>
    </svg>