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
        <path d="M11.9 24.2a11.9 11.9 0 1011.9 11.9 11.9 11.9 0 00-11.9-11.9zm8.132 17.2a.5.5 0 010 .707l-2.122 2.124a.5.5 0 01-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 01-.707 0L3.768 42.11a.5.5 0 010-.707l5.3-5.3-5.3-5.3a.5.5 0 010-.707l2.122-2.128a.5.5 0 01.707 0l5.3 5.3 5.3-5.3a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-5.3 5.3zM30 19v-8a1 1 0 00-1-1H14V3.207a.5.5 0 00-.854-.353L.6 15l6.142 5.946A15.375 15.375 0 0114 20.124V20h15a1 1 0 001-1zm4.854-2.146a.5.5 0 00-.854.353V24H22.62a15.846 15.846 0 015.256 10H34v6.793a.5.5 0 00.854.353L47.4 29z"/>
    </svg>