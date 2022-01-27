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
        <path d="M20 4v12H8L20 4z"/>
<path d="M24 26c0-4.676 5.736-8 14-8q1.028 0 2 .064V6a2 2 0 00-2-2H24v14a2 2 0 01-2 2H8v22a2 2 0 002 2h14z"/>
<path d="M38 22c5.421 0 9.817 1.708 9.817 3.817s-4.4 3.817-9.817 3.817-9.817-1.708-9.817-3.817S32.579 22 38 22zm9.717 8c-1.263 2-4.771 3-9.717 3s-8.454-1-9.721-3H28v4.454C28 36.092 32.579 38 38 38s10-1.908 10-3.546V30zm0 8c-1.263 2-4.771 3-9.717 3s-8.454-1-9.721-3H28v6.454C28 46.092 32.579 48 38 48s10-1.908 10-3.546V38z"/>
    </svg>