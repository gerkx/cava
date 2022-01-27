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
        <path d="M7 18a1 1 0 01-1-1v-2a1 1 0 011-1h16.376a19.836 19.836 0 018.106-1.974A15.816 15.816 0 0016 .2 15.661 15.661 0 00.2 16a15.815 15.815 0 0011.826 15.482A19.912 19.912 0 0117.765 18z"/>
<path d="M32 16a16 16 0 00-16 16 15.831 15.831 0 0016 15.8A15.661 15.661 0 0047.8 32 15.831 15.831 0 0032 16zm8.739 11.07L30.033 40.8a1.212 1.212 0 01-.875.461h-.072a1.2 1.2 0 01-.85-.352l-5.884-5.893a1.2 1.2 0 010-1.7L23.678 32a1.2 1.2 0 011.7 0l3.445 3.444 8.57-10.981a1.2 1.2 0 011.685-.21l1.455 1.133a1.2 1.2 0 01.206 1.684z"/>
    </svg>