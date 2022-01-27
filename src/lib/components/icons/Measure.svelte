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
        <path d="M42.385 19.757l-9.546-9.546a.5.5 0 00-.707 0l-2.122 2.122a.5.5 0 000 .707l9.546 9.546-7.071 7.071-5.3-5.3a.5.5 0 00-.707 0l-2.121 2.122a.5.5 0 000 .707l5.3 5.3-7.071 7.071-9.546-9.547a.5.5 0 00-.707 0l-2.122 2.122a.5.5 0 000 .707l9.546 9.546-4.242 4.242a2 2 0 01-2.829 0L1.373 35.314a2 2 0 010-2.829L32.485 1.372a2 2 0 012.829 0l11.313 11.314a2 2 0 010 2.829z"/>
    </svg>