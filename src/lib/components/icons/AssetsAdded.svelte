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
        <path d="M16 34a18.064 18.064 0 01.118-2H6V8h36v9.9a18.037 18.037 0 014 2.722V6a2 2 0 00-2-2H4a2 2 0 00-2 2v28a2 2 0 002 2h12.117A18.064 18.064 0 0116 34z"/>
<path d="M34 20.05A13.95 13.95 0 1047.95 34 13.95 13.95 0 0034 20.05zM41 36h-5v5a2 2 0 11-4 0v-5h-5a2 2 0 110-4h5v-5a2 2 0 014 0v5h5a2 2 0 110 4z"/>
    </svg>