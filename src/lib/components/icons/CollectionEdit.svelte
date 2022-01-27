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
        <path d="M23.021 38H18V26h10v6.217l4-4V26h2.218l4-4H32V10h10v10.068c.065 0 .126-.021.192-.023h.093a4.954 4.954 0 013.531 1.455l.184.184V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h19.634zM18 10h10v12H18zm-4 28H4V26h10zm0-16H4V10h10z"/>
<path d="M47.668 29.01l-4.68-4.68a.987.987 0 00-.7-.287h-.031a1.112 1.112 0 00-.753.33L27.055 38.82a.812.812 0 00-.2.342l-2.813 8.112c-.092.306.373.69.636.69a.221.221 0 00.05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 00.336-.2L47.624 30.5a1.115 1.115 0 00.328-.717.992.992 0 00-.284-.773zM32.18 43.645c-1.754.527-4.5 1.747-6.02 2.2l2.189-6.022z"/>
    </svg>