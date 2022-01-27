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
        <path d="M22 38h-6.2a.8.8 0 00-.8.8.782.782 0 00.2.526l8.445 8.525a.5.5 0 00.7 0l8.455-8.52a.782.782 0 00.2-.526.8.8 0 00-.8-.8H26V32h-4zm15.5-21.016a7.392 7.392 0 00-.846.048 9.5 9.5 0 10-18.575-3.775A8 8 0 008.27 23.05a4.5 4.5 0 10-.77 8.934L22 32V20.984a1 1 0 011-1h2a1 1 0 011 1V32l11.5-.016a7.5 7.5 0 000-15z"/>
    </svg>