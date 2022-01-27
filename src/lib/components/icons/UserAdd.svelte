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
        <path d="M20 36a16.024 16.024 0 0110.312-14.954 15.627 15.627 0 001.2-5.823C31.512 8.423 27.624 4 22.025 4s-9.488 4.423-9.488 11.223c0 6.286 4.449 11.229 4.449 11.229 0 2.07-.033 3.731-2.109 3.91-2.736.237-11.488 3.1-12.852 11.38A2.007 2.007 0 004.047 44h18.1A15.906 15.906 0 0120 36z"/>
<path d="M36 24a12 12 0 1012 12 12 12 0 00-12-12zm8 13a1 1 0 01-1 1h-5v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-5a1 1 0 01-1-1v-2a1 1 0 011-1h5v-5a1 1 0 011-1h2a1 1 0 011 1v5h5a1 1 0 011 1z"/>
    </svg>