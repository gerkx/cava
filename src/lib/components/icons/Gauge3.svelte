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
        <path d="M4 28.044a19.738 19.738 0 001.838 8.318.994.994 0 001.6.257l1.53-1.53a.991.991 0 00.207-1.079A15.656 15.656 0 0110.2 20.052a16.3 16.3 0 017.528-6.694l.129-1.671a6.1 6.1 0 011.067-2.967A19.99 19.99 0 004 28.044zM43.737 24.8A20.123 20.123 0 0029.064 8.7a6.094 6.094 0 011.078 2.983l.127 1.647a15.93 15.93 0 018.555 20.68.986.986 0 00.207 1.077l1.529 1.53a.994.994 0 001.6-.257 19.8 19.8 0 001.577-11.56zM24 8.271a1.575 1.575 0 00-1.57 1.454l-2.123 22.287A3.7 3.7 0 0024 36a3.7 3.7 0 003.693-3.988L25.57 9.725A1.575 1.575 0 0024 8.271z"/>
    </svg>