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
        <path d="M14 30V14H4a2 2 0 00-2 2v26a2 2 0 002 2h26a2 2 0 002-2V32H16a2 2 0 01-2-2z"/>
<rect height="4" rx="1" ry="1" width="4" x="18" y="24"/>
<rect height="4" rx="1" ry="1" width="4" x="26" y="24"/>
<rect height="4" rx="1" ry="1" width="4" x="34" y="24"/>
<rect height="4" rx="1" ry="1" width="4" x="42" y="24"/>
<rect height="4" rx="1" ry="1" width="4" x="42" y="16"/>
<rect height="4" rx="1" ry="1" width="4" x="42" y="8"/>
<rect height="4" rx="1" ry="1" width="4" x="42"/>
<rect height="4" rx="1" ry="1" width="4" x="34"/>
<rect height="4" rx="1" ry="1" width="4" x="26"/>
<rect height="4" rx="1" ry="1" width="4" x="18"/>
<rect height="4" rx="1" ry="1" width="4" x="18" y="8"/>
<rect height="4" rx="1" ry="1" width="4" x="18" y="16"/>
    </svg>