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
        <path d="M19.957 38H4V14h36v7.958l4 4V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h21.957z"/>
<path d="M47.614 35.227L34.679 22.293a1 1 0 00-.707-.293H23a1 1 0 00-1 1v10.972a1 1 0 00.293.707l12.934 12.935a1 1 0 001.414 0l10.973-10.972a1 1 0 000-1.415zm-20.6-5.214a3 3 0 113-3 3 3 0 01-3.001 3z"/>
    </svg>