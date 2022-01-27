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
        <path d="M6.552 19.622a18.008 18.008 0 0113.07-13.07.5.5 0 00.378-.478V2.986a.506.506 0 00-.606-.5 22.016 22.016 0 00-16.9 16.9.506.506 0 00.5.606h3.08a.5.5 0 00.478-.37zm21.826-13.07a18.008 18.008 0 0113.07 13.07.5.5 0 00.478.378h3.088a.506.506 0 00.5-.606 22.016 22.016 0 00-16.9-16.9.506.506 0 00-.606.5v3.08a.5.5 0 00.37.478zm-8.756 34.896a18.008 18.008 0 01-13.07-13.07.5.5 0 00-.478-.378H2.986a.506.506 0 00-.5.606 22.016 22.016 0 0016.9 16.9.506.506 0 00.606-.5v-3.08a.5.5 0 00-.37-.478zm21.826-13.07a18.008 18.008 0 01-13.07 13.07.5.5 0 00-.378.478v3.088a.506.506 0 00.606.5 22.016 22.016 0 0016.9-16.9.506.506 0 00-.5-.606h-3.08a.5.5 0 00-.478.37z"/>
<circle cx="24" cy="24" r="8"/>
    </svg>