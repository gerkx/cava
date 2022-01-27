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
        <path d="M38 20H16v-7.652C16 10.131 17.646 4 24 4a7.988 7.988 0 017.433 5.1.967.967 0 00.909.609 1.011 1.011 0 00.45-.107L34.6 8.7a1.019 1.019 0 00.564-.9A11.684 11.684 0 0024 .1c-8.1 0-12 7.1-12 12.337V20h-2a2 2 0 00-2 2v20a2 2 0 002 2h28a2 2 0 002-2V22a2 2 0 00-2-2zM26 33.445V37a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3.555a4 4 0 114 0z"/>
    </svg>