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
        <path d="M27.93 8.078V3.837a.848.848 0 00-1.448-.6L16.9 13.169l9.582 9.931a.848.848 0 001.448-.6v-4.3c9.178-1.545 14.058 3.693 15.888 6.176a.6.6 0 001.081-.347C44.9 21.464 41.977 8.078 27.93 8.078zM14 24v-5a1 1 0 00-1.707-.707L1 30l11.293 11.705A1 1 0 0014 41v-5.075C24.817 34.1 30.568 40.277 32.726 43.2A.708.708 0 0034 42.794C34 39.776 30.555 24 14 24z"/>
    </svg>