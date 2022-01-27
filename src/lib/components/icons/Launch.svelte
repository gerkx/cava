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
        <path d="M44.751 2.461a42.443 42.443 0 00-31.035 26.416.638.638 0 00.153.665l4.585 4.586a.64.64 0 00.662.154c2.895-.982 21.354-8.114 26.419-31.038a.665.665 0 00-.784-.783zM11.53 25.4H3.1a.641.641 0 01-.562-.957C4.471 21.077 11.68 9.968 22.592 9.968 20.06 12.5 11.731 23.474 11.53 25.4zM22.592 36.464v8.443a.64.64 0 00.952.564c3.364-1.9 14.482-9.015 14.482-20.068-2.532 2.532-13.505 10.86-15.434 11.061z"/>
    </svg>