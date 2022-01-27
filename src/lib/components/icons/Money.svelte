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
        <path d="M4 16H2a2 2 0 00-2 2v22a2 2 0 002 2h36a2 2 0 002-2v-2H4z"/>
<path d="M10 10H8a2 2 0 00-2 2v22a2 2 0 002 2h34a2 2 0 002-2v-2H10z"/>
<path d="M45.789 6H14.211A2.211 2.211 0 0012 8.211v19.578A2.211 2.211 0 0014.211 30h31.578A2.211 2.211 0 0048 27.789V8.211A2.211 2.211 0 0045.789 6zM20 26a4 4 0 00-4-4v-8a4 4 0 004-4h20a4 4 0 004 4v8a4 4 0 00-4 4z"/>
<circle cx="30" cy="18" r="6"/>
    </svg>