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
        <rect height="4" rx="1" ry="1" width="4" x="10" y="18"/>
<rect height="4" rx="1" ry="1" width="4" x="18" y="18"/>
<rect height="4" rx="1" ry="1" width="4" x="26" y="18"/>
<rect height="4" rx="1" ry="1" width="4" x="34" y="18"/>
<rect height="4" rx="1" ry="1" width="4" x="10" y="24"/>
<rect height="4" rx="1" ry="1" width="4" x="18" y="24"/>
<rect height="4" rx="1" ry="1" width="4" x="26" y="24"/>
<rect height="4" rx="1" ry="1" width="4" x="34" y="24"/>
<rect height="4" rx="1" ry="1" width="4" x="10" y="30"/>
<rect height="4" rx="1" ry="1" width="4" x="18" y="30"/>
<rect height="4" rx="1" ry="1" width="4" x="26" y="30"/>
<rect height="4" rx="1" ry="1" width="4" x="34" y="30"/>
<path d="M45 8h-7V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H14V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H3a1 1 0 00-1 1v32a1 1 0 001 1h42a1 1 0 001-1V9a1 1 0 00-1-1zm-3 30H6V12h4v1a1 1 0 001 1h2a1 1 0 001-1v-1h20v1a1 1 0 001 1h2a1 1 0 001-1v-1h4z"/>
    </svg>