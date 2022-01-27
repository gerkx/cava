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
        <path d="M24.419 15.594l2.393 6.33 6.76.32a.448.448 0 01.259.8l-5.281 4.232 1.785 6.524a.448.448 0 01-.678.493L24 30.58l-5.657 3.714a.448.448 0 01-.678-.493l1.784-6.528-5.281-4.232a.448.448 0 01.259-.8l6.76-.32 2.393-6.33a.448.448 0 01.839.003zM11 10h6a1 1 0 001-1V7a1 1 0 00-1-1h-6a1 1 0 00-1 1v2a1 1 0 001 1zm-8 6H1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1zm-3-6v3a1 1 0 001 1h2a1 1 0 001-1v-3h3a1 1 0 001-1V7a1 1 0 00-1-1H4a4 4 0 00-4 4zm3 26H1a1 1 0 00-1 1v3a4 4 0 004 4h3a1 1 0 001-1v-2a1 1 0 00-1-1H4v-3a1 1 0 00-1-1zm34-26h-6a1 1 0 01-1-1V7a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1zm8 6h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6a1 1 0 011-1zM3 26H1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1zm42 0h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6a1 1 0 011-1zm3-16v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3h-3a1 1 0 01-1-1V7a1 1 0 011-1h3a4 4 0 014 4zm-3 26h2a1 1 0 011 1v3a4 4 0 01-4 4h-3a1 1 0 01-1-1v-2a1 1 0 011-1h3v-3a1 1 0 011-1zM27 10h-6a1 1 0 01-1-1V7a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1zM11 44h6a1 1 0 001-1v-2a1 1 0 00-1-1h-6a1 1 0 00-1 1v2a1 1 0 001 1zm26 0h-6a1 1 0 01-1-1v-2a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1zm-10 0h-6a1 1 0 01-1-1v-2a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1z"/>
    </svg>