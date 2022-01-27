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
        <path d="M11.2 38H8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v33H.8a.8.8 0 00-.8.806.785.785 0 00.236.56l5.451 5.524a.5.5 0 00.626 0l5.451-5.524a.785.785 0 00.236-.56.8.8 0 00-.8-.806zm2.165-25.328l15.983 10.135a1.2 1.2 0 001.3 0l15.987-10.135a.8.8 0 000-1.344L30.652 1.555a1.2 1.2 0 00-1.3 0l-15.987 9.773a.8.8 0 000 1.344zM30 5.85L40 12l-10 6.49L20 12zm16.635 29.418L41.291 32l-10.639 6.747a1.2 1.2 0 01-1.3 0L18.709 32l-5.344 3.268a.8.8 0 000 1.343l15.983 10.136a1.2 1.2 0 001.3 0l15.987-10.136a.8.8 0 000-1.343z"/>
<path d="M46.635 23.268L41.291 20 37.5 22.4l2.5 1.539-10 6.49-10-6.49 2.5-1.539-3.791-2.4-5.344 3.268a.8.8 0 000 1.343l15.983 10.136a1.2 1.2 0 001.3 0l15.987-10.136a.8.8 0 000-1.343z"/>
    </svg>