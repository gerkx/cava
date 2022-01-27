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
        <rect height="6" rx="1" ry="1" width="12" x="2" y="14"/>
<rect height="12" rx="1" ry="1" width="12" x="18" y="8"/>
<path d="M45 0H35a1 1 0 00-1 1v19h12V1a1 1 0 00-1-1zm-1 24H4a2 2 0 00-2 2v16a2 2 0 002 2h40a2 2 0 002-2V26a2 2 0 00-2-2zM14 40H6v-4h8zm0-8H6v-4h8zm28 8H18v-4h24zm0-8H18v-4h24z"/>
    </svg>