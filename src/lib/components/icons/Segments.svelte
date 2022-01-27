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
        <path d="M14 18h32a2 2 0 002-2V6a2 2 0 00-2-2H14a2 2 0 00-2 2v2H8a4 4 0 00-4 4v6.367a5.966 5.966 0 000 11.266V36a4 4 0 004 4h4v2a2 2 0 002 2h32a2 2 0 002-2V32a2 2 0 00-2-2H14a2 2 0 00-2 2v4H8v-6.367a5.966 5.966 0 000-11.266V12h4v4a2 2 0 002 2zm-5 6a3 3 0 11-3-3 3 3 0 013 3z"/>
    </svg>