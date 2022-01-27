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
        <path d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zm-4.493 31.757l12.664-13.125a5.448 5.448 0 019.359 3.793v.066a19.681 19.681 0 018.37 3.75V16a2 2 0 00-2-2H4v26a2 2 0 002 2h12.86z"/>
<path d="M31.03 31.465v-4.24a.848.848 0 00-1.448-.6L20 36.556l9.582 9.932a.848.848 0 001.448-.6v-4.3c9.178-1.545 14.058 3.693 15.888 6.175A.6.6 0 0048 47.412c0-2.561-2.923-15.947-16.97-15.947z"/>
    </svg>