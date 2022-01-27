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
        <path d="M33.123 7.425a3.7 3.7 0 11-3.7 3.7 3.7 3.7 0 013.7-3.7zM21.22 21.585l-5.92-5.92a2.638 2.638 0 00-3.73 0L4 23.23V4h36v15.328a15.052 15.052 0 014 3.7V2a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h15.557a14.888 14.888 0 013.663-14.414zm25.73 22.537a2 2 0 01-2.828 2.828l-5.89-5.89a11.008 11.008 0 112.828-2.828zM32 39a7 7 0 10-7-7 7 7 0 007 7z"/>
    </svg>