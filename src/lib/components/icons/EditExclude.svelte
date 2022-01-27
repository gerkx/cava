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
        <path d="M20.1 36A15.9 15.9 0 0136 20.1a16.088 16.088 0 011.684.091l5.906-5.918a1.886 1.886 0 00.173-2.653l-7.42-7.382a1.888 1.888 0 00-2.649.18L8.82 29.292a2.236 2.236 0 00-.521.814L4.115 41.659a1.655 1.655 0 002.171 2.186L17.9 39.713a2.229 2.229 0 00.826-.526l1.474-1.474A15.982 15.982 0 0120.1 36zM7.4 40.62l3.456-9.653 6.2 6.178c-3.101 1.116-6.976 2.517-9.656 3.475z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.859 8.859 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.925 36zm-17.85 0a8.859 8.859 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"/>
    </svg>