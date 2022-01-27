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
        <path d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zm-.483 26.981A14 14 0 0144 25.256V16a2 2 0 00-2-2H4v26a2 2 0 002 2h16.059a13.963 13.963 0 01-4.442-10.219z"/>
<path d="M47.315 44.084l-7.161-7.161a10.1 10.1 0 10-3.394 3.394l7.161 7.161c.469.469 2.5.89 3.395 0a2.444 2.444 0 00-.001-3.394zm-21.9-12.3a6.2 6.2 0 116.2 6.2 6.2 6.2 0 01-6.198-6.202z"/>
    </svg>