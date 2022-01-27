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
        <path d="M20 22.086V11a1 1 0 011-1h2a1 1 0 011 1v12.586a1 1 0 01-.293.707l-6.3 6.3a1 1 0 01-1.414 0l-1.336-1.336a1 1 0 010-1.414l5.054-5.054a1 1 0 00.289-.703z"/>
<path d="M20.661 40.132A16.194 16.194 0 1137.73 20.2a15.784 15.784 0 014.051 1A19.99 19.99 0 1022 44c.09 0 .177-.012.267-.013a15.791 15.791 0 01-1.606-3.855z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.478 43.9a.5.5 0 01-.707 0z"/>
    </svg>