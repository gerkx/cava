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
        <path d="M32 22h-6v-6h-4v6h-6v4h6v6h4v-6h6v-4zM28 5h-3V2h-2v3h-3v2h3v3h2V7h3V5zm0 36h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2zm18-18h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2zm-36 0H7v-3H5v3H2v2h3v3h2v-3h3v-2zm31.6-12.1h-4.5V6.4h-3v4.5h-4.5v3h4.5v4.5h3v-4.5h4.5v-3zm-23.2 0h-4.5V6.4h-3v4.5H6.4v3h4.5v4.5h3v-4.5h4.5v-3zm23.2 23.2h-4.5v-4.5h-3v4.5h-4.5v3h4.5v4.5h3v-4.5h4.5v-3zm-23.2 0h-4.5v-4.5h-3v4.5H6.4v3h4.5v4.5h3v-4.5h4.5v-3z"/>
    </svg>