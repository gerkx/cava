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
        <path d="M21.056 35.9a4.833 4.833 0 011.17-1.906L24.217 32H16v-4h12.218L36 20.218V6a2 2 0 00-2-2H6a2 2 0 00-2 2v28a2 2 0 002 2h15.02zM32 24H16v-4h16zM8 8h24v8H8zm4 24H8v-4h4zm0-8H8v-4h4zm33.668 3.01l-4.68-4.68a.986.986 0 00-.7-.287h-.032a1.109 1.109 0 00-.752.33L25.055 36.82a.816.816 0 00-.2.341l-2.813 8.113c-.092.3.373.69.636.69a.2.2 0 00.05 0c.224-.052 6.944-2.461 8.117-2.814a.784.784 0 00.336-.2L45.624 28.5a1.114 1.114 0 00.328-.717.991.991 0 00-.284-.773zM30.18 41.645c-1.754.527-4.5 1.747-6.021 2.2l2.189-6.022z"/>
    </svg>