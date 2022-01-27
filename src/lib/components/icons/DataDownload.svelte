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
        <ellipse cx="24" cy="10.25" rx="20" ry="6.25"/>
<path d="M19.464 37.121a2.98 2.98 0 011.676-5.053C14.776 31.708 5.924 30.2 4 27.152v10.6C4 41.2 12.954 44 24 44c.779 0 1.543-.017 2.3-.044zM44 20v-4.5c-1.977 2.5-7.172 3.851-12.267 4.5zm-18 8.186v-7.724c-.7.025-1.379.04-2 .04-6.17 0-17.765-1.461-20-5.006v6.471c0 3.451 8.954 6.25 20 6.25q1.013.001 2-.031zm21.146 8.668a.5.5 0 00-.353-.854H42V24H30v12h-4.793a.5.5 0 00-.353.854L36 48z"/>
<path d="M47.146 36.854a.5.5 0 00-.353-.854H42V24H30v12h-4.793a.5.5 0 00-.353.854L36 48z"/>
    </svg>