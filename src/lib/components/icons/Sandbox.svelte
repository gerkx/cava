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
        <path d="M42 6h2a2 2 0 012 2v2h-4V6zm0 8h4v4h-4zm0 8h4v4h-4zm0 8h4v4h-4zm0 8h4v2a2 2 0 01-2 2h-2v-4zm-8 0h4v4h-4zm-8 0h4v4h-2a2 2 0 01-2-2v-2zm0-8h4v4h-4zm0-8h4v4h-4zm0-8h4v4h-4zm2-8h2v4h-4V8a2 2 0 012-2zm6 0h4v4h-4z"/>
<rect x="2" y="6" width="20" height="36" rx="2"/>
    </svg>