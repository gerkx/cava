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
        <rect height="10" rx="2" ry="2" width="10" x="4" y="34"/>
<rect height="30" rx="2.003" ry="2.003" width="10" x="18" y="14"/>
<rect height="16" rx="2" ry="2" width="10" x="32" y="28"/>
<path d="M15.529 21.529h-6.49a1 1 0 01-1-1v-.5a1 1 0 011-1h6.49zM10.562 9.584l4.967 3.18-1.346 2.1-4.967-3.18a1 1 0 01-.3-1.381l.268-.418a1 1 0 011.378-.301zm10.747 1.958L19 4.267a.5.5 0 00-.628-.325l-1.428.458a.5.5 0 00-.325.628l2.071 6.519zm9.201 9.987H37a1 1 0 001-1v-.5a1 1 0 00-1-1h-6.49zm4.967-11.945l-4.967 3.18 1.346 2.1 4.967-3.18a1 1 0 00.3-1.381l-.268-.418a1 1 0 00-1.378-.301zM24.73 11.542l2.31-7.275a.5.5 0 01.628-.325l1.427.453a.5.5 0 01.325.628l-2.071 6.519z"/>
    </svg>