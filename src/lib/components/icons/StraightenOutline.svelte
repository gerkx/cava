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
        <circle cx="10" cy="13.8" r="2.2"/>
<circle cx="38" cy="13.8" r="2.2"/>
<circle cx="24" cy="5.8" r="2.2"/>
<circle cx="16" cy="7.8" r="2.2"/>
<circle cx="32" cy="7.8" r="2.2"/>
<path d="M46 20H2a2 2 0 00-2 2v16a2 2 0 002 2h44a2 2 0 002-2V22a2 2 0 00-2-2zm-15.872 4A6.868 6.868 0 0124 28.2a6.868 6.868 0 01-6.128-4.2zM4 36V24h4v12zm8 0V24h2.2a10 10 0 0019.6 0H36v12zm32 0h-4V24h4z"/>
    </svg>