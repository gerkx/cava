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
        <path d="M44 4H4a2 2 0 00-2 2v36a2 2 0 002 2h40a2 2 0 002-2V6a2 2 0 00-2-2zm-2 36H6V8h36z"/>
<rect height="4" rx=".5" ry=".5" width="16" x="24" y="16"/>
<rect height="4" rx=".5" ry=".5" width="16" x="24" y="28"/>
<path d="M12.224 23.085L8.142 18.91a1 1 0 01.016-1.41l1.43-1.4a1 1 0 011.412.014l1.852 1.895 5.8-6.4a1 1 0 011.413-.07l1.482 1.342a1 1 0 01.07 1.412l-7.937 8.764a1 1 0 01-1.456.028zm0 12L8.142 30.91a1 1 0 01.016-1.41l1.43-1.4a1 1 0 011.412.014l1.852 1.895 5.8-6.4a1 1 0 011.413-.07l1.482 1.342a1 1 0 01.07 1.412l-7.937 8.764a1 1 0 01-1.456.028z"/>
    </svg>