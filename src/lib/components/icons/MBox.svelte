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
        <path d="M46 6H2a2 2 0 00-2 2v32a2 2 0 002 2h44a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32H4V14h40z"/>
<path d="M16 18h4v2h-4zm-4 0h2v2h-2zm10 0h4v2h-4zm6 0h4v2h-4zm6 0h2v2h-2zM16 32h4v2h-4zm-4 0h2v2h-2zm10 0h4v2h-4zm6 0h4v2h-4zm6 0h2v2h-2zm4.001-14h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm-30-12h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2z"/>
    </svg>