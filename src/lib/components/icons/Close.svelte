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
        <path d="M35.314 8.444L24 19.757 12.686 8.444a1 1 0 00-1.414 0l-2.828 2.828a1 1 0 000 1.414L19.757 24 8.444 35.314a1 1 0 000 1.414l2.828 2.828a1 1 0 001.414 0L24 28.243l11.314 11.313a1 1 0 001.414 0l2.828-2.828a1 1 0 000-1.414L28.243 24l11.313-11.314a1 1 0 000-1.414l-2.828-2.828a1 1 0 00-1.414 0z"/>
    </svg>