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
        <path d="M19.867 26.04a1 1 0 00-1.414 0l-9.142 9.142-3.947-3.946A.781.781 0 004.8 31a.8.8 0 00-.8.754V43.5a.5.5 0 00.5.5h11.75a.8.8 0 00.75-.8.784.784 0 00-.235-.56l-3.948-3.947 9.142-9.142a1 1 0 000-1.414zM43.5 4H31.754a.8.8 0 00-.754.8.784.784 0 00.235.56l3.948 3.947-9.142 9.142a1 1 0 000 1.414l2.093 2.093a1 1 0 001.414 0l9.142-9.142 3.947 3.946a.781.781 0 00.563.24.8.8 0 00.8-.754V4.5a.5.5 0 00-.5-.5z"/>
    </svg>