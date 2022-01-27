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
        <rect height="6" rx="1" ry="1" width="26" x="10" y="26"/>
<rect height="6" rx="1" ry="1" width="8" y="26"/>
<rect height="6" rx="1" ry="1" width="8" x="38" y="26"/>
<rect height="6" rx="1" ry="1" width="10" y="18"/>
<rect height="6" rx="1" ry="1" width="10" x="36" y="18"/>
<rect height="6" rx="1" ry="1" width="6" y="10"/>
<rect height="6" rx="1" ry="1" width="6" x="12" y="18"/>
<rect height="6" rx="1" ry="1" width="6" x="20" y="18"/>
<rect height="6" rx="1" ry="1" width="6" x="28" y="18"/>
<rect height="6" rx="1" ry="1" width="6" x="8" y="10"/>
<rect height="6" rx="1" ry="1" width="6" x="16" y="10"/>
<rect height="6" rx="1" ry="1" width="6" x="24" y="10"/>
<rect height="6" rx="1" ry="1" width="6" x="32" y="10"/>
<rect height="6" rx="1" ry="1" width="6" x="40" y="10"/>
    </svg>