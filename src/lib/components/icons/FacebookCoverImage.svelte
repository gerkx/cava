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
        <path d="M19.42 34.931v-1.267a.881.881 0 01.221-.565 6.734 6.734 0 001.505-4.175c0-3.159-1.658-4.924-4.163-4.924s-4.21 1.835-4.21 4.924A6.8 6.8 0 0014.35 33.1a.882.882 0 01.221.566v1.261a.867.867 0 01-.751.878C8.787 36.246 8 39.725 8 41.1c0 .152.018.752.029.9h17.955s.016-.75.016-.9c0-1.315-.889-4.782-5.831-5.289a.871.871 0 01-.749-.88z"/>
<path d="M42 6H6a2 2 0 00-2 2v28a1.967 1.967 0 00.76 1.532 9.256 9.256 0 014.8-4.739C8.6 31.622 8 28.605 8 27.035V12h32v17.737a7.686 7.686 0 01-4.138-2.775C34.144 24.7 31.768 22 30.215 22c-1.622 0-3.488 2.436-5.329 4.62a11.046 11.046 0 01.261 2.3 10.642 10.642 0 01-.752 3.889 9.305 9.305 0 015 5.187H42a2 2 0 002-2V8a2 2 0 00-2-2z"/>
    </svg>