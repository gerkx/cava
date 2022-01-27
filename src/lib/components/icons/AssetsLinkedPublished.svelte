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
        <path d="M17 32H6V8h36v14l4-.875V6a2 2 0 00-2-2H4a2 2 0 00-2 2v28a2 2 0 002 2h13zm14.237 6.8l9.084 5.063a.819.819 0 001.1-.366l6.485-16.146zm-3.154.963V47.2a.5.5 0 00.824.381l5.32-4.525z"/>
<path d="M46.79 25.535l-25.713 7.909a.409.409 0 00-.066.759l7.114 3.479zM19.112 24H16a4 4 0 010-8h6a4 4 0 014 4v2h2v-2a6.007 6.007 0 00-6-6h-6a6 6 0 000 12h4.764a7.993 7.993 0 01-1.652-2z"/>
<path d="M32 14h-4.765a7.993 7.993 0 011.652 2H32a4 4 0 110 8h-6a4 4 0 01-4-4v-2h-2v2a6.007 6.007 0 006 6h6a6 6 0 100-12z"/>
    </svg>