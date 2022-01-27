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
        <path d="M44.24 2.028l-.809.158a11.812 11.812 0 00-6.09 3.24l-7.919 7.92-8.46-2.307.727-.728a1.854 1.854 0 10-2.621-2.622l-2.226 2.226L5.847 6.917a2.466 2.466 0 00-2.393.635L2 9.006 22.418 20.35 18.768 24a10.458 10.458 0 00-1.077 1.264l-4.124 5.696-10.334-.462L2 31.73l7.852 4.362-3.495 4.447a.79.79 0 001.103 1.103l4.447-3.495L16.269 46l1.233-1.233-.462-10.334 5.696-4.124A10.458 10.458 0 0024 29.232l3.651-3.65L38.994 46l1.454-1.454a2.466 2.466 0 00.635-2.393l-3.265-11.971 1.871-1.871a1.854 1.854 0 00-2.621-2.622l-.373.373-2.041-7.484 7.919-7.919a11.817 11.817 0 003.241-6.091l.158-.807a1.477 1.477 0 00-1.733-1.733z"/>
    </svg>