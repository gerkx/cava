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
        <path d="M47.713 28.966l-4.68-4.68a.986.986 0 00-.7-.287H42.3a1.114 1.114 0 00-.753.33L27.1 38.776a.811.811 0 00-.2.342l-2.816 8.112c-.092.306.373.69.636.69a.233.233 0 00.05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 00.336-.2L47.67 30.453a1.117 1.117 0 00.33-.717.992.992 0 00-.287-.77zM32.226 43.6c-1.754.527-4.5 1.747-6.02 2.2l2.189-6.022zM42.885 4H5.119a1.464 1.464 0 00-1.136 2.388l16.1 19.671v13.4a1.464 1.464 0 002.46 1.073l4.93-5.445A1.464 1.464 0 0027.958 34v-7.973L44.021 6.388A1.464 1.464 0 0042.885 4z"/>
    </svg>