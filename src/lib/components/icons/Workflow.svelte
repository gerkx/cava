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
        <rect height="20" rx="2" ry="2" width="12" x="4" y="14"/>
<rect height="12" rx="2" ry="2" width="12" x="32" y="4"/>
<rect height="12" rx="2" ry="2" width="12" x="32" y="18"/>
<rect height="12" rx="2" ry="2" width="12" x="32" y="32"/>
<path d="M30 11V9a1 1 0 00-1-1h-6a1 1 0 00-1 1v13h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v13a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1h-3V26h3a1 1 0 001-1v-2a1 1 0 00-1-1h-3V12h3a1 1 0 001-1z"/>
    </svg>