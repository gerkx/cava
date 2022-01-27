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
        <path d="M42 20h-2a16 16 0 00-32 0H6a4 4 0 00-4 4v8a4 4 0 004 4h6V20h-.1a12.1 12.1 0 0124.2 0H36v15.117a13.956 13.956 0 01-8.54 6.4A4.336 4.336 0 0024 40c-2.209 0-4 1.343-4 3s1.791 3 4 3c1.977 0 3.608-1.078 3.931-2.492A16 16 0 0037.826 36H42a4 4 0 004-4v-8a4 4 0 00-4-4z"/>
    </svg>