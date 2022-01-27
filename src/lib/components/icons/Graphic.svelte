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
        <path d="M45 18H32V1.151a1 1 0 00-1.707-.707L.4 30.293A1 1 0 001.111 32H14.18a11.981 11.981 0 0020.746 10H45a1 1 0 001-1V19a1 1 0 00-1-1zM15.5 28.2h-8L28.2 7.536V18H23a1 1 0 00-1 1v3.7a12.027 12.027 0 00-6.5 5.5zm10.5 14a8.2 8.2 0 118.2-8.2 8.21 8.21 0 01-8.2 8.2z"/>
    </svg>