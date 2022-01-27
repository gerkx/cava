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
        <path d="M38.4 14.151C38.4 6.554 31.942.4 23.981.4a15.068 15.068 0 00-2.891.28A14.713 14.713 0 009.6 14.253c0 7.278 6.56 11.14 6.56 17.747v2h15.68v-2c0-6.672 6.56-10.731 6.56-17.849zM16 38v2.489a2 2 0 00.478 1.3l4.7 5.511a2 2 0 001.522.7h2.6a2 2 0 001.522-.7l4.7-5.511a2 2 0 00.478-1.3V38z"/>
    </svg>