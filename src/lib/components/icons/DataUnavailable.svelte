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
        <ellipse cx="24" cy="10.25" rx="20" ry="6.25"/>
<path d="M20.1 36a15.871 15.871 0 01.519-3.965C14.3 31.624 5.872 30.122 4 27.152v10.6c0 3.268 8.03 5.946 18.258 6.223A15.8 15.8 0 0120.1 36zM36 20.1a15.8 15.8 0 017.955 2.148 2.037 2.037 0 00.045-.28V15.5c-3.059 3.865-13.83 5-20 5s-17.765-1.458-20-5v6.471c0 3.257 7.978 5.93 18.16 6.221A15.886 15.886 0 0136 20.1z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.859 8.859 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.925 36zm-17.85 0a8.859 8.859 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"/>
    </svg>