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
        <path d="M47.713 28.966l-4.68-4.68a.986.986 0 00-.7-.287H42.3a1.114 1.114 0 00-.753.33L27.1 38.776a.811.811 0 00-.2.342l-2.816 8.112c-.092.306.373.69.636.69a.233.233 0 00.05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 00.336-.2l14.446-14.448a1.117 1.117 0 00.331-.717.992.992 0 00-.287-.77zM32.225 43.6c-1.754.527-4.5 1.747-6.02 2.2l2.189-6.022zM28 4v12h12L28 4z"/>
<path d="M23.117 37.807a4.663 4.663 0 011.156-1.859L40 20.588V20H26a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h10.972z"/>
    </svg>