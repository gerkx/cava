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
        <path d="M41.406 22a3.5 3.5 0 11-3.5-3.5 3.5 3.5 0 013.5 3.5zM40 6a2 2 0 00-2-2H2a2 2 0 00-2 2v28a2 2 0 002 2h2V8h36z"/>
<path d="M46 12H10a2 2 0 00-2 2v28a2 2 0 002 2h36a2 2 0 002-2V14a2 2 0 00-2-2zm-2 24.9l-6.225-6.225a2.362 2.362 0 00-3.34 0L30.809 34.3l-8.923-8.923a2.361 2.361 0 00-3.339 0L12 31.922V16h32z"/>
    </svg>