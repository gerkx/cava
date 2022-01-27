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
        <path d="M14 15.078A11.678 11.678 0 002.322 26.756C2.322 33.205 14 47.922 14 47.922s11.678-14.717 11.678-21.166A11.678 11.678 0 0014 15.078zm0 16.2a4.525 4.525 0 114.525-4.525A4.525 4.525 0 0114 31.281zM30.5 18a.494.494 0 00-.5.5v24.782a.494.494 0 00.846.353L38 36h8.506c.446 0 .479-.78.225-1.033S30.846 18.148 30.846 18.148A.49.49 0 0030.5 18z"/>
<path d="M4 4v10.755a15.241 15.241 0 014-2.526V8h30v12l4 4V4z"/>
    </svg>