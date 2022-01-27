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
        <rect height="4" rx="1" ry="1" width="26" x="18" y="8"/>
<rect height="4" rx="1" ry="1" width="26" x="18" y="24"/>
<rect height="4" rx="1" ry="1" width="26" x="18" y="40"/>
<path d="M12 4V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V4zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V6zm4 14v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V20zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V22zm-2-2v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V20zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V22zm6 14v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V36zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V38zm-2-2v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V36zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V38zm-2-2v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V36zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V38z"/>
    </svg>