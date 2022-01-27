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
        <path d="M43 8H17a1 1 0 00-1 1v2a1 1 0 001 1h26a1 1 0 001-1V9a1 1 0 00-1-1zM8 36a4 4 0 104 4 4 4 0 00-4-4zm8-11v2a1 1 0 001 1h12.632l4-4H17a1 1 0 00-1 1zm-8-5a4 4 0 104 4 4 4 0 00-4-4zM8 4a4 4 0 104 4 4 4 0 00-4-4zm9 36a1 1 0 00-1 1v2a1 1 0 001 1h7.44a10.922 10.922 0 01-1.157-4zm28.4-2.674l-5.566 5.566a7 7 0 01-9.9-9.9l7.528-7.528a5 5 0 017.071 0 4.816 4.816 0 01-.156 6.915l-6.542 6.542a2.82 2.82 0 01-4.086.156 2.789 2.789 0 01.184-4.059l4.58-4.58 1.23 1.23-4.58 4.58a1 1 0 001.414 1.414l6.542-6.542a3 3 0 00-4.243-4.243l-7.528 7.528a5.232 5.232 0 00-.1 7.26 5.127 5.127 0 007.172-.189l5.566-5.566z"/>
    </svg>