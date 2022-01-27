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
        <path d="M33.6 42l8.4-8.4h-7.9a.5.5 0 00-.5.5z"/>
<path d="M40 6H8a2 2 0 00-2 2v32a2 2 0 002 2h22V32a2 2 0 012-2h10V8a2 2 0 00-2-2zM25.5 34h-13a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zm10-8h-23a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h23a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zm0-8h-23a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h23a.5.5 0 01.5.5v3a.5.5 0 01-.5.5z"/>
    </svg>