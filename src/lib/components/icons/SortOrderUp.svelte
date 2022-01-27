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
        <rect height="4" rx="1" ry="1" width="28" x="4" y="32"/>
<rect height="4" rx="1" ry="1" width="24" x="4" y="22"/>
<rect height="4" rx="1" ry="1" width="20" x="4" y="12"/>
<path d="M45.764 14.634L40.313 9.11a.5.5 0 00-.626 0l-5.451 5.524a.785.785 0 00-.236.56.8.8 0 00.8.806H38v19a1 1 0 001 1h2a1 1 0 001-1V16h3.2a.8.8 0 00.8-.806.785.785 0 00-.236-.56z"/>
    </svg>