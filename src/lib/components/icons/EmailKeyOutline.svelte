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
        <path d="M33.8 38H4v-2.809l14.182-8.566 3.945 3.156a2.981 2.981 0 003.747 0l2.344-1.875a10.323 10.323 0 01-.371-2.262l-3.222 2.575a1 1 0 01-1.249 0L4 12.7V10h40v2.731l-1.61 1.287A12.609 12.609 0 0148 16.564V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h31.8zM4 15.265l12.516 10.028L4 32.854z"/>
<path d="M48 25c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 3.258 2.556 5.972 6 6.752V47a1 1 0 001 1h6.5a.5.5 0 00.5-.5v-3.638a.5.5 0 00-.5-.5H42V42h3.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H42v-6.248c3.444-.78 6-3.494 6-6.752zm-8 .774a2.4 2.4 0 112.4-2.4 2.4 2.4 0 01-2.4 2.4z"/>
    </svg>