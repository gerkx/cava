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
        <path d="M43.467 4.539c-2.32-2.32-4.706-2.386-6.815-.277L30.447 10.5l-2.016-2.016a2.008 2.008 0 00-2.829 0l-4.092 4.092a2 2 0 000 2.829l.881.88L6.381 32.3a6.593 6.593 0 009.324 9.324l16.01-16.01.886.887a2 2 0 002.829 0l4.091-4.091a2 2 0 00-.011-2.84l-2-1.972 6.257-6.198c2.215-2.216 2.02-4.541-.3-6.861zM13.089 39A2.893 2.893 0 019 34.911L25.007 18.9l4.093 4.093z"/>
    </svg>