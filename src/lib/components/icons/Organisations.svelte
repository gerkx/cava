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
        <path d="M42 4H18a2 2 0 00-2 2v10h12v28h14a2 2 0 002-2V6a2 2 0 00-2-2zm-14 8h-8V8h8zm12 24h-8v-4h8zm0-8h-8v-4h8zm0-8h-8v-4h8zm0-8h-8V8h8z"/>
<path d="M4 22v20a2 2 0 002 2h16a2 2 0 002-2V22a2 2 0 00-2-2H6a2 2 0 00-2 2zm8 20H6v-4h6zm0-8H6v-4h6zm0-8H6v-4h6zm10 8h-6v-4h6zm0-8h-6v-4h6z"/>
    </svg>