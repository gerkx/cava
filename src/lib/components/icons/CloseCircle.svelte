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
        <path d="M38.071 9.928a19.9 19.9 0 100 28.143 19.9 19.9 0 000-28.143zm-6.294 23.547a1 1 0 01-1.414 0L24 27.111l-6.364 6.364a1 1 0 01-1.414 0l-1.7-1.7a1 1 0 010-1.414L20.888 24l-6.363-6.363a1 1 0 010-1.415l1.7-1.7a1 1 0 011.414 0L24 20.888l6.364-6.363a1 1 0 011.415 0l1.695 1.7a1 1 0 010 1.414L27.112 24l6.362 6.363a1 1 0 010 1.414z"/>
    </svg>