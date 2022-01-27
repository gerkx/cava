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
        <path d="M23.9 7.8A16.1 16.1 0 117.8 23.9 16.1 16.1 0 0123.9 7.8zm0-3.8a19.9 19.9 0 1019.9 19.9A19.9 19.9 0 0023.9 4zm11.758 12.521l-2.972-2.313a1 1 0 00-1.404.175l-9.27 11.892-4.938-4.938a1 1 0 00-1.414 0l-2.694 2.694a1 1 0 000 1.414l8.757 8.772a1 1 0 001.497-.092l12.613-16.2a1 1 0 00-.175-1.404z"/>
    </svg>