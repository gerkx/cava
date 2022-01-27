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
        <path d="M36.1 24.2A11.9 11.9 0 1048 36.1a11.9 11.9 0 00-11.9-11.9zm8 13.4a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5.5h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v5.5h5.5a.5.5 0 01.5.5z"/>
<path d="M20.1 36H10v-6h11.272a15.9 15.9 0 012.366-4H10v-6h28a9.211 9.211 0 014 1.272V8a2 2 0 00-2-2H8a2 2 0 00-2 2v30a2 2 0 002 2h12.607a15.935 15.935 0 01-.507-4zM10 10h28v6H10z"/>
    </svg>