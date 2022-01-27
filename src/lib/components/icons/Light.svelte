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
        <circle cx="24" cy="24" r="11.9"/>
<rect height="6" rx="1" ry="1" width="3.6" x="22.2"/>
<rect height="6" rx="1" ry="1" width="3.6" x="22.2" y="42"/>
<rect height="3.6" rx="1" ry="1" width="6" y="22.2"/>
<rect height="3.6" rx="1" ry="1" width="6" x="42" y="22.2"/>
<rect height="3.6" rx="1" ry="1" transform="rotate(-45 39.02 9.02)" width="6" x="36.02" y="7.22"/>
<rect height="3.6" rx="1" ry="1" transform="rotate(-45 9.02 39.02)" width="6" x="6.02" y="37.22"/>
<rect height="6" rx="1" ry="1" transform="rotate(-45 9 9)" width="3.6" x="7.2" y="6"/>
<rect height="6" rx="1" ry="1" transform="rotate(-45 38.98 38.98)" width="3.6" x="37.18" y="35.98"/>
    </svg>