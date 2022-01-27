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
        <rect height="4" rx="1" ry="1" width="28" x="16" y="4"/>
<rect height="4" rx="1" ry="1" width="28" x="16" y="12"/>
<rect height="4" rx="1" ry="1" width="28" x="16" y="20"/>
<path d="M44 43V29a1 1 0 00-1-1H17a1 1 0 00-1 1v14a1 1 0 001 1h26a1 1 0 001-1zm-4-3H20v-8h20zM4.864 45.685A.5.5 0 014 45.341V26.659a.5.5 0 01.864-.343L14 36z"/>
    </svg>