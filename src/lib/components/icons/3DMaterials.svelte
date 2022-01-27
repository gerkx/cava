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
        <path d="M15.773 36.675a.272.272 0 00-.357-.339c-.927.362-2.337.774-2.946.165-1.923-1.923 1.876-9.793 8.189-16.107s14.258-9.861 16.1-8.02a1.372 1.372 0 01.318 1.276.277.277 0 00.355.314 11.389 11.389 0 011.887-.412.529.529 0 00.462-.478 2.834 2.834 0 00-.636-2.391l-.022-.02.007-.008a20.127 20.127 0 10-28.83 28.06 1.008 1.008 0 00.157.131l.013.014a2.63 2.63 0 001.933.668 8.188 8.188 0 002.541-.5.573.573 0 00.378-.456 14.205 14.205 0 01.451-1.897z"/>
<path d="M43.545 19.976c-.37-2.233-1.186-3.733-3.166-3.733-3.394 0-8.841 3.431-13.875 8.741-5.976 6.3-9.421 13.123-8.375 16.583a3.459 3.459 0 003.1 2.381 18.183 18.183 0 002.8.217 18.854 18.854 0 0013.879-5.986 20.136 20.136 0 005.637-18.203z"/>
    </svg>