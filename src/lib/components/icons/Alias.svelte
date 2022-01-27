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
        <path d="M38 5a1 1 0 00-1-1H14.94a1 1 0 00-.943 1 .984.984 0 00.294.7l5.689 5.689a66.854 66.854 0 00-6.159 11.115 36.062 36.062 0 00-2.677 10.457c-.1 1.05-.147 2.092-.147 3.124a36.824 36.824 0 00.71 7.087 1.018 1.018 0 001.993.028l.007-.028a31.279 31.279 0 013.2-8.524 28.012 28.012 0 015.3-6.688 55.887 55.887 0 018.2-6.152l5.893 5.897a.981.981 0 00.7.3 1 1 0 001-.948V5z"/>
    </svg>