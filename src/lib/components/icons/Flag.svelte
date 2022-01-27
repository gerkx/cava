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
        <path d="M36.917 9.289a24.815 24.815 0 00-5.379.594 1.431 1.431 0 01-1.705-1.419V6.809a1.977 1.977 0 00-1.508-1.945 25.481 25.481 0 00-5.575-.614A25.05 25.05 0 0010 7.712v19.832a24.989 24.989 0 0112.765-3.461 1.44 1.44 0 011.4 1.439v3.807a2.009 2.009 0 002.843 1.812 25.25 25.25 0 0114.637-1.568A1.982 1.982 0 0044 27.619V11.848A1.979 1.979 0 0042.491 9.9a25.527 25.527 0 00-5.574-.611z"/>
<rect height="42" rx="1" ry="1" width="4" x="2" y="4"/>
    </svg>