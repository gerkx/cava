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
        <path d="M31.737 34.212c2.623-.536 8.138-3.266 8.138-11.726 0-9-6.05-14.4-14.4-14.4C16 8.084 8.286 14.455 8.286 26.073c0 8.085 3.641 13.653 10.012 16.919a.514.514 0 01.268.482l-.107 3.534c0 .268-.054.268-.268.214C9.731 43.9 4.217 36.3 4.217 26.288 4.217 13.652 13 4.55 25.633 4.55c10.066 0 18.15 6.532 18.15 17.615 0 10.869-7.977 16.169-17.079 16.169-7.068 0-11.94-3.962-11.94-11.618a12.152 12.152 0 0112.475-12.582 14.245 14.245 0 015.354.856c.214.054.268.108.268.322zM28.9 17.828a7.184 7.184 0 00-2.2-.268c-4.926 0-8.031 3.909-8.031 8.835 0 4.658 2.463 8.352 7.6 8.352a6.635 6.635 0 001.66-.161z"/>
    </svg>