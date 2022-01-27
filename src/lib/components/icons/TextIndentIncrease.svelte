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
        <rect height="4" rx="1" ry="1" width="32" x="12" y="6"/>
<rect height="4" rx="1" ry="1" width="20" x="24" y="14"/>
<rect height="4" rx="1" ry="1" width="20" x="24" y="22"/>
<rect height="4" rx="1" ry="1" width="20" x="24" y="30"/>
<rect height="4" rx="1" ry="1" width="32" x="12" y="38"/>
<path d="M10 20v-5.341a.5.5 0 01.864-.343L20 24l-9.136 9.684a.5.5 0 01-.864-.343V28H1a1 1 0 01-1-1v-6a1 1 0 011-1z"/>
    </svg>