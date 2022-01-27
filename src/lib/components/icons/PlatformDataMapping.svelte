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
        <path d="M38.597 27.45A6.642 6.642 0 0031.006 32H12v-5.864a.667.667 0 00-1.106-.502l-9.13 7.99a.5.5 0 000 .752l9.13 7.99A.667.667 0 0012 41.864V36h19.006a6.654 6.654 0 107.591-8.55zm-31.195-8.9A6.642 6.642 0 0014.994 14H34v5.864a.667.667 0 001.106.502l9.13-7.99a.5.5 0 000-.752l-9.13-7.99A.667.667 0 0034 4.136V10H14.994a6.654 6.654 0 10-7.592 8.55z"/>
    </svg>