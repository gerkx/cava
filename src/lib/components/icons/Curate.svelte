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
        <path d="M46 4H2a2 2 0 00-2 2v36a2 2 0 002 2h44a2 2 0 002-2V6a2 2 0 00-2-2zm-2 36H4v-8h10.328a4.164 4.164 0 007.344 0h2.656a4.164 4.164 0 007.344 0H44zm0-12H31.672a4.164 4.164 0 00-7.344 0h-2.656a4.164 4.164 0 00-7.344 0H4v-8h4.328a4.164 4.164 0 007.344 0h2.656a4.164 4.164 0 007.344 0h6.656a4.164 4.164 0 007.344 0H44zm0-12h-4.328a4.164 4.164 0 00-7.344 0h-6.656a4.164 4.164 0 00-7.344 0h-2.656a4.164 4.164 0 00-7.344 0H4V8h40z"/>
    </svg>