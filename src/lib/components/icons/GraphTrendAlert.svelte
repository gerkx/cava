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
        <path d="M42.842 41.685l-8.411-16.823a1.6 1.6 0 00-2.861 0l-8.412 16.823A1.6 1.6 0 0024.589 44h16.822a1.6 1.6 0 001.431-2.315zM31.8 29.45c0-.249.268-.45.6-.45h1.2c.332 0 .6.2.6.45v8.1c0 .249-.268.45-.6.45h-1.2c-.332 0-.6-.2-.6-.45zM34.5 42a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2a.5.5 0 01.5.5z"/>
<path d="M20.543 37.971l2.936-5.871 4.776-14.465 1.535 3.391a5.521 5.521 0 018.148 1.948l5.882-8.4A1 1 0 0044 14V9.657a1 1 0 00-1.819-.574l-7.749 11.07L28.6 8.5a1 1 0 00-1.835.105l-7.222 22.329-6.714-6.346a1 1 0 00-1.347-.061l-7.123 5.936a1 1 0 00-.359.768v2.575a1 1 0 001.641.769l6.176-5.146 8.283 8.283a1 1 0 00.443.259z"/>
    </svg>