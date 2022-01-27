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
        <path d="M12 32v14a2 2 0 002 2h18a2 2 0 002-2V32zm17.3 5.6l-6.737 8.983a.5.5 0 01-.754.054l-4.87-4.87a.5.5 0 010-.707l2.121-2.121a.5.5 0 01.707 0l2.016 2.016L26.1 35.2a.5.5 0 01.7-.1l2.4 1.8a.5.5 0 01.1.7zM6 16l4.5 12h25L40 16H6zM44.557 0H1.443a1 1 0 00-.936 1.351L4.5 12h37l3.993-10.649A1 1 0 0044.557 0z"/>
    </svg>