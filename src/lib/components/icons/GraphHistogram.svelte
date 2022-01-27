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
        <path d="M43.388 38h-4.776a.613.613 0 00-.612.612v-7.775a.837.837 0 00-.837-.837h-4.326a.837.837 0 00-.837.837V22.92a.92.92 0 00-.92-.92h-4.16a.92.92 0 00-.92.92V11a1 1 0 00-1-1h-4a1 1 0 00-1 1V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v14a1 1 0 00-1-1H9a1 1 0 00-1 1v11H4.882a.882.882 0 00-.882.882V44h40v-5.388a.613.613 0 00-.612-.612z"/>
    </svg>