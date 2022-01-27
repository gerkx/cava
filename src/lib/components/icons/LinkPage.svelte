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
        <path d="M23 24h24a1 1 0 011 1v22a1 1 0 01-1 1H23a1 1 0 01-1-1V25a1 1 0 011-1zm21 6H26v14h18zM26.991 12c.8-.8 2.732-2.668 3.064-3A6.326 6.326 0 1139 17.945L36.947 20h6.472A11.049 11.049 0 0026.7 5.643c-.594.594-3.806 3.741-5.483 5.418a12.819 12.819 0 015.774.939z"/>
<path d="M18 38.946l-.055.054A6.326 6.326 0 019 30.055l8.214-8.214A7.068 7.068 0 0123.508 20h7.45a10.346 10.346 0 00-1.271-1.588 11.281 11.281 0 00-15.829.073L5.643 26.7A11.052 11.052 0 0018 44.6z"/>
    </svg>