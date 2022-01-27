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
        <path d="M8 19V8h32v32H29a1 1 0 00-1 1v2a1 1 0 001 1h13a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v13a1 1 0 001 1h2a1 1 0 001-1z"/>
<path d="M23.5 24H10a1 1 0 00-1 1.007.978.978 0 00.295.7l3.671 3.672-9.38 9.379a1 1 0 000 1.414l4.242 4.242a1 1 0 001.414 0l9.379-9.378 3.672 3.671a.978.978 0 00.7.3A1 1 0 0024 38V24.5a.5.5 0 00-.5-.5z"/>
    </svg>