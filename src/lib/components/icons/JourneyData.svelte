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
        <path d="M38 22c5.421 0 9.817 1.708 9.817 3.817s-4.4 3.817-9.817 3.817-9.817-1.708-9.817-3.817S32.579 22 38 22zm9.717 8c-1.263 2-4.771 3-9.717 3s-8.454-1-9.721-3H28v4.454C28 36.092 32.579 38 38 38s10-1.908 10-3.546V30zm0 8c-1.263 2-4.771 3-9.717 3s-8.454-1-9.721-3H28v6.454C28 46.092 32.579 48 38 48s10-1.908 10-3.546V38z"/>
<path d="M24 34V14a4 4 0 014-4h6.349a6 6 0 100-4H28a8 8 0 00-8 8v8h-6.349a6 6 0 100 4H20v8a7.991 7.991 0 004 6.921zM40 5.6A2.4 2.4 0 1137.6 8 2.4 2.4 0 0140 5.6zM8 26.4a2.4 2.4 0 112.4-2.4A2.4 2.4 0 018 26.4z"/>
    </svg>