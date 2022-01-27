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
        <path d="M42 15.556V7a1 1 0 00-1-1h-8.556a19.713 19.713 0 00-16.888 0H7a1 1 0 00-1 1v8.556a19.709 19.709 0 000 16.888V41a1 1 0 001 1h8.556a19.713 19.713 0 0016.889 0H41a1 1 0 001-1v-8.556a19.709 19.709 0 000-16.888zM34 10h4v4h-4zm-24 0h4v4h-4zm4 28h-4v-4h4zm24 0h-4v-4h4zm-7-8a1 1 0 00-1 1v7.929a15.954 15.954 0 01-12 0V31a1 1 0 00-1-1H9.071a15.96 15.96 0 010-12H17a1 1 0 001-1V9.071a15.954 15.954 0 0112 0V17a1 1 0 001 1h7.929a15.96 15.96 0 010 12z"/>
    </svg>