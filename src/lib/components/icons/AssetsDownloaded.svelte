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
<path d="M34 20a14 14 0 1014 14 14 14 0 00-14-14zm7.364 16.464l-5.9 5.9a2.15 2.15 0 01-2.929 0l-5.9-5.9a2 2 0 012.828-2.828L32 36.171V25a2 2 0 014 0v11.172l2.536-2.536a2 2 0 112.828 2.828z"/>
    </svg>