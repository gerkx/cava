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
        <path d="M41.61 40.424l-8.963-20.915A8 8 0 0132 16.358V8a2 2 0 002-2V4a2 2 0 00-2-2H16a2 2 0 00-2 2v2a2 2 0 002 2v8.358a8.014 8.014 0 01-.647 3.151L6.389 40.424A4 4 0 0010.066 46h27.867a4 4 0 003.677-5.576zM14.272 32l4.78-11.3A12.006 12.006 0 0020 16.022V8h8v8.059a12 12 0 00.919 4.607l2.444 5.879z"/>
    </svg>