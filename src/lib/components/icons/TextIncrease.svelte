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
        <path d="M20.239 38A21.4 21.4 0 0120 34V10h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2H2a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10v28h-3a1 1 0 00-1 1v2a1 1 0 001 1h10.28a15.814 15.814 0 01-1.041-4z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm6.231 15.911H29.769a.668.668 0 01-.5-1.108l6.312-9.989a.5.5 0 01.846 0l6.308 9.986a.668.668 0 01-.504 1.111z"/>
    </svg>