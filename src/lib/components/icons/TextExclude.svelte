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
        <path d="M20 38V10h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2H2a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10v28h-3a1 1 0 00-1 1v2a1 1 0 001 1h10a8.289 8.289 0 01-1-4z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.865 8.865 0 01-1.663 5.159l-12.42-12.421A8.9 8.9 0 0144.925 36zm-17.85 0a8.862 8.862 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"/>
    </svg>