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
        <path d="M25 10h-2a1 1 0 00-1 1v12.586a1 1 0 00.293.707l6.3 6.3a1 1 0 001.414 0l1.336-1.336a1 1 0 000-1.414l-5.054-5.054a1 1 0 01-.289-.703V11a1 1 0 00-1-1z"/>
<path d="M44.221 22.915A19.994 19.994 0 005.182 18H.8a.8.8 0 00-.8.806.785.785 0 00.236.56l6.435 6.488a.5.5 0 00.707 0l6.386-6.488a.785.785 0 00.236-.56.8.8 0 00-.8-.806H9.215a16.2 16.2 0 113.932 17.787.493.493 0 00-.69.005l-1.986 1.987a.506.506 0 00.005.722 20 20 0 0033.745-15.586z"/>
    </svg>