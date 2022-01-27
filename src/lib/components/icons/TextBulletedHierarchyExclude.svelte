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
        <path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.865 8.865 0 01-1.663 5.159l-12.42-12.421A8.9 8.9 0 0144.925 36zm-17.85 0a8.862 8.862 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"/>
<rect height="4" rx="1" ry="1" width="28" x="12" y="8"/>
<circle cx="4" cy="8" r="4"/>
<circle cx="10" cy="24" r="4"/>
<circle cx="10" cy="40" r="4"/>
<path d="M25.6 24H19a1 1 0 00-1 1v2a1 1 0 001 1h3.281a16 16 0 013.319-4zm-4.971 16H19a1 1 0 00-1 1v2a1 1 0 001 1h3.281a15.849 15.849 0 01-1.652-4z"/>
    </svg>