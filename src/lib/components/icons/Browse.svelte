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
        <path d="M46.91 28.25S39.024 11.707 38 9c-.978-2.583-2.238-5-5-5-3.1 0-4.707 2.244-5 5a490.06 490.06 0 00-.484 5h-7.037c-.269-2.857-.468-4.871-.479-5-.244-2.8-1.366-5-5-5-2.762 0-3.9 2.467-5 5C9.122 11.024.889 28.622.889 28.622h.02A11 11 0 1022 33c0-.338-.021-.67-.05-1h4.1c-.03.33-.05.662-.05 1a11 11 0 1020.91-4.75zM11 40.2a7.2 7.2 0 117.2-7.2 7.2 7.2 0 01-7.2 7.2zm26 0a7.2 7.2 0 117.2-7.2 7.2 7.2 0 01-7.2 7.2z"/>
    </svg>