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
        <path d="M9.286 10.65A19.662 19.662 0 005.052 30h10.654zM32.1 5.855a19.7 19.7 0 00-19.562 1.9l3.287 9.908zm11.728 19.581c.037-.475.072-.951.072-1.436a19.84 19.84 0 00-8.032-15.935l-8.084 5.866zm-8.821-1.404l-6.226 19.256A19.9 19.9 0 0043.02 29.779zM24.386 43.88L27.58 34H6.815A19.875 19.875 0 0024 43.9c.13 0 .258-.011.386-.02z"/>
    </svg>