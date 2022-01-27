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
        <path d="M28 4v12h12L28 4z"/>
<path d="M26 20a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zm-4.793 17.8a1.178 1.178 0 01-.959 1.862h-1.439a1.176 1.176 0 01-.942-.471L13.1 32.833l4.77-6.361a1.176 1.176 0 01.939-.472h1.439a1.178 1.178 0 01.959 1.862l-3.384 5.167zm13.54 1.733h-3.322v-5.039h-4.242v5.043H23.86V26.128h3.322v5.043h4.242v-5.043h3.322z"/>
    </svg>