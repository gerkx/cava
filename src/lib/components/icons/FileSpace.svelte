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
        <path d="M23 2C14.552 2 6 4.748 6 10v28c0 5.252 8.552 8 17 8s17-2.748 17-8V10c0-5.252-8.552-8-17-8zm13 36a1 1 0 01-.39.8C32.654 41.026 28.743 42 23 42s-9.654-.974-12.61-3.195A1 1 0 0110 38V15.328C13.281 17.091 18.153 18 23 18s9.719-.909 13-2.672zM23 14.2c-8.577 0-13-2.944-13-4.2s4.423-4.2 13-4.2S36 8.744 36 10s-4.423 4.2-13 4.2z"/>
<path d="M32 28c0-1.1-4.029-2-9-2s-9 .9-9 2v8c0 1.1 4.029 2.2 9 2.2s9-1.1 9-2.2z"/>
    </svg>