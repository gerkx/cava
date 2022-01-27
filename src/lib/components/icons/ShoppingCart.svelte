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
        <path d="M17.56 42a4 4 0 11-4-4 4 4 0 014 4zm20 0a4 4 0 11-4-4 4 4 0 014 4zm2-10H14.483l.922-4H39.56a2 2 0 001.961-1.608l4.44-18A2 2 0 0044 6H11.78l-.41-2.294A2 2 0 009.392 2H4a2 2 0 000 4h3.667l3.893 19.9-1.941 7.614A2 2 0 0011.56 36h28a2 2 0 000-4zm2-22l-3.641 14h-22.6l-2.692-14z"/>
    </svg>