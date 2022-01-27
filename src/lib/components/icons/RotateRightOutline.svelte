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
        <path d="M27 2h5a10 10 0 0110 10v4h4.2a.8.8 0 01.8.806.785.785 0 01-.236.56l-6.435 6.488a.5.5 0 01-.707 0l-6.386-6.488a.785.785 0 01-.236-.56.8.8 0 01.8-.806H38v-4.387A5.613 5.613 0 0032.387 6H27a1 1 0 01-1-1V3a1 1 0 011-1zM4 18h22v22H4zm-2-4a2 2 0 00-2 2v26a2 2 0 002 2h26a2 2 0 002-2V16a2 2 0 00-2-2z"/>
    </svg>