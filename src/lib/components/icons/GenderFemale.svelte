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
        <circle cx="24" cy="4.913" r="4.913"/>
<path d="M17.053 17.757l.7 8.666-5.715 9.7a1.248 1.248 0 001.335 1.491h5.9l.924 9.342A1.211 1.211 0 0021.4 48h5.18a1.211 1.211 0 001.206-1.044l.929-9.342h5.906a1.248 1.248 0 001.335-1.491l-5.715-9.7.708-8.712a5.211 5.211 0 00-3.61-5.521 5.4 5.4 0 00-1.418-.19h-3.842a5.39 5.39 0 00-.733.05 5.243 5.243 0 00-4.293 5.707z"/>
    </svg>