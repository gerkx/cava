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
        <path d="M47.9 24A11.9 11.9 0 1036 35.9 11.9 11.9 0 0047.9 24zM44 25.5a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h15a.5.5 0 01.5.5z"/>
<path d="M4 6v36a2 2 0 002 2h36a2 2 0 002-2v-4.335a15.812 15.812 0 01-4 1.682V40h-8v-.6a15.766 15.766 0 01-4-1.612V40h-8v-6h3.545a15.827 15.827 0 01-3.017-6H10v-8h10.528a15.827 15.827 0 013.017-6H20V8h8v2.214A15.766 15.766 0 0132 8.6V8h8v.653a15.812 15.812 0 014 1.682V6a2 2 0 00-2-2H6a2 2 0 00-2 2zm12 28v6H8v-6zm0-26v6H8V8z"/>
    </svg>