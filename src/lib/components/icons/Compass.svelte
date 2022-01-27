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
        <path d="M2 26h2a1.894 1.894 0 00.2-.04 19.743 19.743 0 002.248 7.379l2.492-3.69A16.064 16.064 0 0129.577 8.913l3.7-2.5A19.749 19.749 0 0025.96 4.2 1.894 1.894 0 0026 4V2a2 2 0 00-4 0v2a1.894 1.894 0 00.04.2A19.9 19.9 0 004.2 22.04 1.894 1.894 0 004 22H2a2 2 0 000 4zm44-4h-2a1.894 1.894 0 00-.2.04 19.76 19.76 0 00-2.215-7.317l-2.5 3.7a16.064 16.064 0 01-20.733 20.638l-3.691 2.492A19.749 19.749 0 0022.04 43.8a1.894 1.894 0 00-.04.2v2a2 2 0 004 0v-2a1.894 1.894 0 00-.04-.2A19.9 19.9 0 0043.8 25.96a1.894 1.894 0 00.2.04h2a2 2 0 000-4zm-26.391-1.006L4.23 43.77l22.776-15.379a6.009 6.009 0 001.615-1.615L44 4 21.224 19.379a6.009 6.009 0 00-1.615 1.615zm4.4 6.63a3.635 3.635 0 113.634-3.635 3.634 3.634 0 01-3.632 3.635z"/>
    </svg>