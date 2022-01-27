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
        <path d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm7 7.9c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4zm-14 0c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4zm7 24c-6.259 0-11.393-4.494-11.945-10.1h23.89C35.393 31.506 30.259 36 24 36z"/>
    </svg>