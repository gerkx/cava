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
        <path d="M10 38H8v-2H4v4a2 2 0 002 2h4zM4 16h4v6H4zm0 10h4v6H4zm4-16h2V6H6a2 2 0 00-2 2v4h4zm6 28h8v4h-8zm12 0h8v4h-8zm14-12h4v6h-4zm0-10h4v6h-4zm2-10h-4v4h2v2h4V8a2 2 0 00-2-2zm-2 32h-2v4h4a2 2 0 002-2v-4h-4zM14 6h8v4h-8zm12 0h8v4h-8z"/>
    </svg>