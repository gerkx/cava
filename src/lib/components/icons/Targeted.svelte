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
        <path d="M24 4a19.978 19.978 0 00-5.209.709l1.625 1.641a5.176 5.176 0 011.507 3.656v.165a14.117 14.117 0 11-11.752 11.752h-.166a5.165 5.165 0 01-3.656-1.508l-1.64-1.624A19.989 19.989 0 1024 4z"/>
<path d="M25.685 17.213a5.993 5.993 0 01-8.472 8.472 7 7 0 108.472-8.472z"/>
<path d="M8.37 1.05L6.178 6.178 1.05 8.37a.6.6 0 00-.186.98l8.3 8.224a1.2 1.2 0 00.847.349l5.09.007 4.8 4.8a2 2 0 002.828-2.83l-4.8-4.8-.007-5.09a1.2 1.2 0 00-.349-.847L9.35.864a.6.6 0 00-.98.186z"/>
    </svg>