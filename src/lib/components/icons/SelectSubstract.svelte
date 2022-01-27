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
        <path d="M4 14h4v8H4zm0 12h4v8H4zm12 0h4v8h-4zM44 6a2 2 0 00-2-2h-4v4h2v2h4zM26 4h8v4h-8zm0 12h8v4h-8zM14 4h8v4h-8zM8 8h2V4H6a2 2 0 00-2 2v4h4zm12 12h2v-4h-4a2 2 0 00-2 2v4h4zM8 40v-2H4v4a2 2 0 002 2h4v-4zm8 0v-2h4v4a2 2 0 01-2 2h-4v-4zm24-24v-2h4v4a2 2 0 01-2 2h-4v-4z"/>
    </svg>