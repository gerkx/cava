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
        <path d="M19.658 37.325l-.927.12a3.548 3.548 0 01-3.975-3.063l-.371-3.33 7.964-1.032.371 3.33a3.548 3.548 0 01-3.062 3.975zm-2.62-33.69c-2.047-2.387-4.338-2.612-5.955 2.409-2.4 10.632-.538 14.923 2.839 21.9l7.964-1.032c-.854-6.592.787-9.552.443-12.2a21.473 21.473 0 00-5.291-11.077zm11.523 42.16l.921.155a3.548 3.548 0 004.089-2.909l.493-3.25-7.919-1.336-.493 3.25a3.548 3.548 0 002.909 4.09zm3.905-33.565c2.134-2.307 4.434-2.445 5.859 2.634 1.987 10.716-.033 14.933-3.674 21.778l-7.919-1.336c1.106-6.555-.421-9.575.024-12.213a21.471 21.471 0 015.71-10.864z"/>
    </svg>