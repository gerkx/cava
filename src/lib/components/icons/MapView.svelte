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
        <path d="M33.151 4.486l-9.386 4.693-9.33-4.665a1.241 1.241 0 00-1.105 0L4.683 8.838A1.234 1.234 0 004 9.943v31.826a1.236 1.236 0 001.788 1.105l8.094-4.047 9.33 4.664a1.235 1.235 0 001.105 0l9.33-4.664 10.659 4.263A1.235 1.235 0 0046 41.943V10.016a1.235 1.235 0 00-.777-1.147L34.162 4.444a1.238 1.238 0 00-1.011.042zM24 41.328l-10.118-5.174V6.827L24 12zm20-.928l-10.353-4.044V6.709L44 10.75z"/>
    </svg>