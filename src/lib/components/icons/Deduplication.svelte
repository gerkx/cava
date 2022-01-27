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
        <circle cx="9" cy="7" r="5"/>
<path d="M28.756 12H17.09l5.833-10 5.833 10z"/>
<circle cx="17.333" cy="41" r="5"/>
<path d="M36.886 46H25.219l5.834-10 5.833 10zm6.024-34H31.244l5.833-10 5.833 10zM38 16.077H10v2.759a2 2 0 001.012 1.739l7.429 4.225A4 4 0 0120 27.968V33a1 1 0 001 1h6a1 1 0 001-1v-5.032a4 4 0 011.559-3.168l7.429-4.224A2 2 0 0038 18.836z"/>
    </svg>