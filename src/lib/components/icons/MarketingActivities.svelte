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
        <path d="M16.646 22.375l3.716 2.66a6.387 6.387 0 011.181-1.613l-3.772-2.7a6.406 6.406 0 01-1.125 1.653zm14.405 1.741a6.35 6.35 0 01.958 1.757l3.116-1.773a6.362 6.362 0 01-1.051-1.7zm2.075-12.323a6.452 6.452 0 01-1.421 1.407l3.031 3.174a6.424 6.424 0 011.395-1.437zM12.551 35.51a6.407 6.407 0 011.149 1.638l7.51-4.948a6.424 6.424 0 01-1.089-1.679zm4.193-21.767a6.394 6.394 0 011.1 1.672l5.348-3.235a6.407 6.407 0 01-1.085-1.68zM8 44.4a4.4 4.4 0 114.4-4.4A4.4 4.4 0 018 44.4zM30.4 28a4.4 4.4 0 10-4.4 4.4 4.4 4.4 0 004.4-4.4zm14-8a4.4 4.4 0 10-4.4 4.4 4.4 4.4 0 004.4-4.4zm-12-12a4.4 4.4 0 10-4.4 4.4A4.4 4.4 0 0032.4 8zm-16 10a4.4 4.4 0 10-4.4 4.4 4.4 4.4 0 004.4-4.4z"/>
    </svg>