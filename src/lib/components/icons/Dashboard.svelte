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
        <path d="M9.321 36.978a18.245 18.245 0 01-3.653-10.717 18.539 18.539 0 0117.8-18.587 18.33 18.33 0 0115.212 29.3 1 1 0 00.143 1.373l1.277 1.07a1.008 1.008 0 001.442-.147 22 22 0 10-35.084 0 1 1 0 001.438.147l1.281-1.068a1 1 0 00.144-1.371z"/>
<path d="M27.9 31.127a4 4 0 11-4.773-3.027c1.028-.229 7.608-8.53 8.451-8.037C32.5 20.6 27.651 30 27.9 31.127z"/>
<circle cx="10" cy="26" r="2.2"/>
<circle cx="14" cy="16" r="2.2"/>
<circle cx="34" cy="16" r="2"/>
<circle cx="24" cy="12" r="2"/>
<circle cx="38" cy="26" r="2"/>
    </svg>