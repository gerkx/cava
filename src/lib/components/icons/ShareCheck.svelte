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
        <path d="M21.722 6.331L16 0l-5.708 6.331A1 1 0 0011.035 8H14v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V8h2.979a1 1 0 00.743-1.669zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0zM28 22.275a15.8 15.8 0 014-1.648V9a1 1 0 00-1-1h-7v4h4z"/>
<path d="M22.275 28H4V12h4V8H1a1 1 0 00-1 1v22a1 1 0 001 1h19.627a15.788 15.788 0 011.648-4z"/>
    </svg>