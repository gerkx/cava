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
        <path d="M14.884 46.939L19 42l4.116 4.939a.5.5 0 00.884-.32V30H14v16.619a.5.5 0 00.884.32zM44.429 20h-3.538L28 37.725V42h.981a2 2 0 001.618-.824l14.477-19.9A.8.8 0 0044.429 20z"/>
<path d="M44.429 4H21.617A2 2 0 0020 4.824L4 26h.045c-2.282 3.019-2.982 7.3-.389 11.731A8.727 8.727 0 0010 41.922v-4.331A5.959 5.959 0 0112 26h16.981a2 2 0 001.618-.824l14.477-19.9A.8.8 0 0044.429 4z"/>
    </svg>