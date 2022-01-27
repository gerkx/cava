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
        <path d="M43 8h-9V6a4 4 0 00-4-4H18a4 4 0 00-4 4v2H5a1 1 0 00-1 1v2a1 1 0 001 1h1.2l2 30a2 2 0 002 2h27.6a2 2 0 002-2l2-30H43a1 1 0 001-1V9a1 1 0 00-1-1zM18 6h12v2H18zm18 34H12l-2-28h28z"/>
<path d="M24 36a2 2 0 01-2-2V18a2 2 0 014 0v16a2 2 0 01-2 2zm-6.935.016a2 2 0 01-1.994-1.868L14 18.133a2 2 0 014-.266l1.066 16.016a2 2 0 01-1.866 2.129c-.045.002-.09.004-.135.004zm13.863.029h-.134a2 2 0 01-1.864-2.129L30 17.848a2 2 0 113.992.265l-1.069 16.065a2 2 0 01-1.995 1.867z"/>
    </svg>