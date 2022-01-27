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
        <path d="M42 12h-2V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v9h-8V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v9h-2a2 2 0 00-2 2v4a2 2 0 002 2v6a6 6 0 006 6h2v4a7.083 7.083 0 01-14 0V15.382a7.26 7.26 0 00-6.133-7.33 6.929 6.929 0 00-7.322 4.363 1.022 1.022 0 00.527 1.326l1.719.738a1.044 1.044 0 001.4-.527A3 3 0 0112 15v21a11.05 11.05 0 0022 0v-4h2a6 6 0 006-6v-6a2 2 0 002-2v-4a2 2 0 00-2-2z"/>
    </svg>