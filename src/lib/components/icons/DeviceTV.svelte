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
        <path d="M44 14H25.414l9.107-9.107a1.8 1.8 0 00-.016-2.421 1.787 1.787 0 00-2.4.007L24 10.586 15.909 2.5a1.783 1.783 0 00-2.4 0 1.8 1.8 0 00-.01 2.414L22.586 14H4a2 2 0 00-2 2v26a2 2 0 002 2h40a2 2 0 002-2V16a2 2 0 00-2-2zm-6 26H6V18h32zm6-2a2 2 0 01-4 0v-2.128a2 2 0 014 0z"/>
    </svg>