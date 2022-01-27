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
        <path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.924 36a8.858 8.858 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.924 36zm-17.85 0a8.858 8.858 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.074 36zM4 4h24v18.274a15.779 15.779 0 014-1.647V0H0v32h8v-4H4z"/>
<path d="M27.365 22.66L12.854 8.2a.488.488 0 00-.35-.147.5.5 0 00-.5.5v26.782a.5.5 0 00.5.5.488.488 0 00.35-.147L20 28.535l1.958.011a15.964 15.964 0 015.407-5.886z"/>
    </svg>