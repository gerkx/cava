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
        <path d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm7 7.9c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4zm-14 0c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4zm19.674 20.763l-2.416 1.208a1.157 1.157 0 01-1.346-.229 12.381 12.381 0 00-8.857-3.336 12.362 12.362 0 00-8.889 3.363 1.176 1.176 0 01-.84.358 1.144 1.144 0 01-.519-.127L11.4 32.8a1.157 1.157 0 01-.375-1.773c2.9-3.482 7.768-5.56 13.03-5.56 5.238 0 10.095 2.061 12.992 5.515a1.152 1.152 0 01-.373 1.779z"/>
    </svg>