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
        <circle cx="24" cy="24" r="6.25"/>
<path d="M40.525 9.509A21.94 21.94 0 0026 2.1v9.574a12.433 12.433 0 016.785 3.463zm-5.392 8.867A12.438 12.438 0 0136.318 22h9.587a21.85 21.85 0 00-3.019-9.262zM11.242 41.9l4.813-8.251A12.489 12.489 0 0122 11.675V2.1a21.978 21.978 0 00-10.758 39.8zM36.325 26a12.46 12.46 0 01-16.81 9.657L14.7 43.915A21.95 21.95 0 0045.9 26z"/>
    </svg>