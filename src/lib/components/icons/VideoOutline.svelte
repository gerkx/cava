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
        <path d="M6 4v40h36V4zm6 37a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H9a1 1 0 01-1-1V7a1 1 0 011-1h2a1 1 0 011 1zm22 31H14V26h20zm0-20H14V6h20zm6 19a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1h-2a1 1 0 01-1-1V7a1 1 0 011-1h2a1 1 0 011 1z"/>
    </svg>