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
        <path d="M6 24l18-4 18 4V9.333L46 8V6H28V2a2 2 0 00-2-2h-6a2 2 0 00-2 2v4H2v2l4 1.333zm4-14h28v2H10zm38 20.403v4.264c0 6.616-7.22 5.475-7.942 12.203A1.319 1.319 0 0138.725 48H26.667L24 24l22.956 5.101A1.334 1.334 0 0148 30.403zM1.044 29.1L24 24v24H9.275a1.319 1.319 0 01-1.333-1.13C7.22 40.142 0 41.283 0 34.667v-4.264A1.334 1.334 0 011.044 29.1z"/>
    </svg>