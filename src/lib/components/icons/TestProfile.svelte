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
        <path d="M43.121 38.879l-9.888-9.888a16 16 0 10-4.242 4.242l9.888 9.888a3 3 0 004.242-4.242zM29.178 27.864a10.027 10.027 0 00-4.961-1.719 1.165 1.165 0 01-1.009-1.17v-1.689a1.165 1.165 0 01.3-.754 8.925 8.925 0 002.028-5.566c0-4.212-2.234-6.566-5.609-6.566s-5.673 2.446-5.673 6.566a9.014 9.014 0 002.125 5.566 1.171 1.171 0 01.3.754v1.682a1.16 1.16 0 01-1.013 1.171 9.857 9.857 0 00-4.928 1.628 12.1 12.1 0 1118.443.1z"/>
    </svg>