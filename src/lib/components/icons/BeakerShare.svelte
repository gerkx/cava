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
        <path d="M39.722 26.331L34 20l-5.708 6.331A1 1 0 0029.035 28H32v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V28h2.979a1 1 0 00.743-1.669z"/>
<path d="M47 30h-7v4h4v10H24V34h4v-4h-7a1 1 0 00-1 1v16a1 1 0 001 1h26a1 1 0 001-1V31a1 1 0 00-1-1z"/>
<path d="M30 2H14a2 2 0 00-2 2v2a2 2 0 002 2v8.358a8 8 0 01-.647 3.151L4.389 40.424A4 4 0 008.066 46h8.469V30.64L12.272 32l4.78-11.3A12 12 0 0018 16.022V8h8v8.059a12 12 0 00.919 4.607l.515 1.24 2.941-3.262A7.957 7.957 0 0130 16.358V8a2 2 0 002-2V4a2 2 0 00-2-2z"/>
    </svg>