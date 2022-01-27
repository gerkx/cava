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
        <path d="M18.809 32H8V8h24v10.809l4-4V5a1 1 0 00-1-1H5a1 1 0 00-1 1v30a1 1 0 001 1h11.571a13.809 13.809 0 01.849-2.138A11.88 11.88 0 0118.809 32zm28.717-9.753l-5.764-5.765a1.217 1.217 0 00-.867-.353h-.038a1.371 1.371 0 00-.927.406L21.043 35.423a1 1 0 00-.251.421l-2.777 9.305c-.114.377.459.851.783.851a.3.3 0 00.061-.006c.276-.064 7.867-2.345 9.312-2.779a.984.984 0 00.414-.249l18.887-18.887a1.376 1.376 0 00.405-.884 1.225 1.225 0 00-.351-.948zm-26.9 21.142l2.009-6.731 4.72 4.708c-2.155.65-4.861 1.466-6.728 2.023z"/>
    </svg>