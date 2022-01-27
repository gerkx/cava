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
        <rect height="10" rx="1" ry="1" width="4" x="4" y="30"/>
<rect height="20" rx="1" ry="1" width="4" x="10" y="20"/>
<rect height="34" rx="1" ry="1" width="4" x="16" y="6"/>
<rect height="24" rx="1" ry="1" width="4" x="22" y="16"/>
<rect height="18" rx="1" ry="1" width="4" x="28" y="22"/>
<rect height="26" rx="1" ry="1" width="4" x="34" y="14"/>
<rect height="8" rx="1" ry="1" width="4" x="40" y="32"/>
    </svg>