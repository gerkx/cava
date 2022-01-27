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
        <path d="M26 5.248v8.177a1.009 1.009 0 00.756.961 10 10 0 010 19.228 1.009 1.009 0 00-.756.961v8.177a1 1 0 001.14 1 20 20 0 000-39.505A1 1 0 0026 5.248zm-7.612 10.503a9.927 9.927 0 012.858-1.364 1.011 1.011 0 00.754-.961V5.25a1.006 1.006 0 00-1.142-1 19.9 19.9 0 00-10.13 4.816 1 1 0 00.059 1.519l6.388 5.142a1.009 1.009 0 001.213.024zM14 24a9.759 9.759 0 01.746-3.715 1.012 1.012 0 00-.283-1.184l-6.4-5.152a1 1 0 00-1.5.266 19.99 19.99 0 0014.3 29.538 1 1 0 001.14-1v-8.178a1.009 1.009 0 00-.756-.961A10 10 0 0114 24z"/>
    </svg>