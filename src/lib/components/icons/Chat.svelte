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
        <path d="M4.5 20h21a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-9.811a2 2 0 00-1.422.593L9.6 39.6V35a1 1 0 00-1-1H4.5a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5zM0 20v14a4 4 0 004 4h2v8.793a.5.5 0 00.5.5.486.486 0 00.35-.148L16 38h10a4 4 0 004-4V20a4 4 0 00-4-4H4a4 4 0 00-4 4z"/>
<path d="M28 12H18V8a4 4 0 014-4h22a4 4 0 014 4v14a4 4 0 01-4 4h-2v6.793a.5.5 0 01-.853.354L34 26v-8a6 6 0 00-6-6z"/>
    </svg>