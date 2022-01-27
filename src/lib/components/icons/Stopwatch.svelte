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
        <path d="M26 6.237V4h1a1 1 0 001-1V1a1 1 0 00-1-1h-6a1 1 0 00-1 1v2a1 1 0 001 1h1v2.026a18.894 18.894 0 00-9.875 3.394l-1.186-1.185.8-.8a1 1 0 000-1.414L10.328 4.6a1 1 0 00-1.414 0L4.671 8.845a1 1 0 000 1.415l1.415 1.414a1 1 0 001.414 0l.611-.611.987.988A19 19 0 1026 6.237zM23 40.1a15.1 15.1 0 119.281-27.011L22.675 22.7c-.021.021-.037.04-.057.062a1.858 1.858 0 102.619 2.634l.068-.066 9.606-9.606A15.1 15.1 0 0123 40.1z"/>
    </svg>