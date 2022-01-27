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
        <path d="M46.829 22.828l-2.705-2.706-5.08-11.713A4 4 0 0035.374 6H12.626a4 4 0 00-3.67 2.409l-5.08 11.716-2.703 2.703A4 4 0 000 25.657v11.255A1.088 1.088 0 001.088 38H2v6a2 2 0 002 2h4a2 2 0 002-2v-6h28v6a2 2 0 002 2h4a2 2 0 002-2v-6h.912A1.088 1.088 0 0048 36.912V25.656a4 4 0 00-1.171-2.828zM11.21 9.761a1.85 1.85 0 011.702-1.136h22.176a1.849 1.849 0 011.702 1.136L41 20H7zM8 32a4 4 0 114-4 4 4 0 01-4 4zm32 0a4 4 0 114-4 4 4 0 01-4 4z"/>
    </svg>