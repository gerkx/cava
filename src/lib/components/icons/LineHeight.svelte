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
        <rect height="4" rx="1" ry="1" width="26" x="18" y="6"/>
<rect height="4" rx="1" ry="1" width="26" x="18" y="22"/>
<rect height="4" rx="1" ry="1" width="26" x="18" y="38"/>
<path d="M13.2 10a.8.8 0 00.8-.806.785.785 0 00-.236-.56L8.313 3.11a.5.5 0 00-.626 0L2.236 8.634a.785.785 0 00-.236.56.8.8 0 00.8.806H6v28H2.8a.8.8 0 00-.8.806.785.785 0 00.236.56l5.451 5.524a.5.5 0 00.626 0l5.451-5.524a.785.785 0 00.236-.56.8.8 0 00-.8-.806H10V10z"/>
    </svg>