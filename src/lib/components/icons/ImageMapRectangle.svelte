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
        <path d="M43 16a1 1 0 001-1V5a1 1 0 00-1-1H33a1 1 0 00-1 1v3H16V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3v16H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-3h16v3a1 1 0 001 1h10a1 1 0 001-1V33a1 1 0 00-1-1h-3V16zM8 8h4v4H8zm4 32H8v-4h4zm20-7v3H16v-3a1 1 0 00-1-1h-3V16h3a1 1 0 001-1v-3h16v3a1 1 0 001 1h3v16h-3a1 1 0 00-1 1zm8 7h-4v-4h4zm-4-28V8h4v4z"/>
    </svg>