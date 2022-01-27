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
        <path d="M24 7.9A16.1 16.1 0 117.9 24 16.118 16.118 0 0124 7.9zm0-3.8A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1z"/>
<path d="M29.724 18.665c0 3.521-4.544 5.537-4.544 7.361a3.367 3.367 0 00.575 1.7.166.166 0 01-.159.256h-2.817a.414.414 0 01-.384-.16 3.449 3.449 0 01-.832-2.176c0-2.561 4.192-4.128 4.192-6.689 0-1.248-1.024-2.336-2.976-2.336a9.248 9.248 0 00-3.872.8c-.128.064-.224 0-.224-.128v-2.532c0-.128 0-.256.128-.32a10.942 10.942 0 014.768-.992c3.745 0 6.145 2.144 6.145 5.216zm-7.969 14.082a2.241 2.241 0 014.481 0A2.084 2.084 0 0124 34.987a2.116 2.116 0 01-2.245-2.24z"/>
    </svg>