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
        <path d="M32.817 11.44A19.969 19.969 0 0024 9.249c-11.552 0-21 11.5-21 15.231 0 4 9.944 14.271 20.915 14.271C34.975 38.751 45 28.477 45 24.48c0-3.152-5.619-9.788-12.183-13.04zM24 36.3A12.3 12.3 0 1136.3 24 12.3 12.3 0 0124 36.3z"/>
<path d="M27.556 24.111A3.556 3.556 0 0124 20.555a3.506 3.506 0 011.8-3.025 6.523 6.523 0 00-1.8-.28A6.75 6.75 0 1030.75 24a6.264 6.264 0 00-.233-1.594 3.5 3.5 0 01-2.961 1.705z"/>
    </svg>