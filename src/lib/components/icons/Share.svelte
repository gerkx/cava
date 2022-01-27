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
        <path d="M42 12h-5.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H40v24H8V16h3a1 1 0 001-1v-2a1 1 0 00-1-1H6a2 2 0 00-2 2v28a2 2 0 002 2h36a2 2 0 002-2V14a2 2 0 00-2-2z"/>
<path d="M23.646 1.146L14.3 10.293A1 1 0 0015 12h5v13a1 1 0 001 1h6a1 1 0 001-1V12h5a1 1 0 00.707-1.707l-9.353-9.147a.5.5 0 00-.708 0z"/>
    </svg>