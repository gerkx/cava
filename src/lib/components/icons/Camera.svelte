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
        <circle cx="24" cy="25" r="7"/>
<path d="M44 12h-6.75a2 2 0 01-1.664-.891l-4.992-4.218A2 2 0 0028.93 6h-9.86a2 2 0 00-1.664.891l-4.867 4.218a2 2 0 01-1.664.891H4a2 2 0 00-2 2v26a2 2 0 002 2h40a2 2 0 002-2V14a2 2 0 00-2-2zM24 36.3A11.3 11.3 0 1135.3 25 11.3 11.3 0 0124 36.3z"/>
    </svg>