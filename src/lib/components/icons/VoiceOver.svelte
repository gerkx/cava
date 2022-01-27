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
        <path d="M32 9a9 9 0 00-18 0v16a9 9 0 0018 0z"/>
<path d="M37.5 20H36a.5.5 0 00-.5.5V25a12.484 12.484 0 01-11.454 12.442l-1.036.086-1.052-.088A12.6 12.6 0 0110.5 25v-4.5a.5.5 0 00-.5-.5H8.5a.5.5 0 00-.5.5v4.076a15.292 15.292 0 0013.75 15.355V44H13a1 1 0 00-1 1v2a1 1 0 001 1h20a1 1 0 001-1v-2a1 1 0 00-1-1h-8.75v-4.066A14.992 14.992 0 0038 25v-4.5a.5.5 0 00-.5-.5z"/>
    </svg>