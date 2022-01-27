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
        <path d="M30 12h10v4H30zm-14 0h10v12H16zm8.1 24A11.9 11.9 0 1036 24.1 11.9 11.9 0 0024.1 36zm13.4-8a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5zm-15.342 0H16v4h4.524a15.87 15.87 0 011.634-4z"/>
<path d="M20 36h-8V8h32v14.158a16.046 16.046 0 014 3.283V5a1 1 0 00-1-1H9a1 1 0 00-1 1v29a2 2 0 01-4 0V9a1 1 0 00-1-1H1a1 1 0 00-1 1v25a6 6 0 006 6h14.524A15.986 15.986 0 0120 36z"/>
    </svg>