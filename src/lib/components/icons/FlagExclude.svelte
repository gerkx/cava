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
        <rect height="40" rx="1" ry="1" width="4" x="4" y="4"/>
<path d="M24.147 25.427A15.831 15.831 0 0144 22.275V11.394a1.42 1.42 0 00-1.064-1.387 25.5 25.5 0 00-6.019-.717 24.822 24.822 0 00-5.379.594 1.43 1.43 0 01-1.705-1.418V6.354a1.42 1.42 0 00-1.064-1.387 25.477 25.477 0 00-6.019-.717A25.406 25.406 0 0010 8.168V28a25.336 25.336 0 0112.762-3.917 1.425 1.425 0 011.385 1.344z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.859 8.859 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.925 36zm-17.85 0a8.859 8.859 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"/>
    </svg>