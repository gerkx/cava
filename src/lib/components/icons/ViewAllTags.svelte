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
        <rect height="6" rx="1" ry="1" width="6" x="4" y="4"/>
<rect height="6" rx="1" ry="1" width="28" x="14" y="4"/>
<rect height="6" rx="1" ry="1" width="6" x="4" y="14"/>
<rect height="6" rx="1" ry="1" width="6" x="4" y="24"/>
<rect height="6" rx="1" ry="1" width="6" x="4" y="34"/>
<path d="M19.465 37.508A4.958 4.958 0 0118 34h-3a1 1 0 00-1 1v4a1 1 0 001 1h6.957zM18 24h-3a1 1 0 00-1 1v4a1 1 0 001 1h3zm5-6h10.973a5.028 5.028 0 013.535 1.465l.535.535H41a1 1 0 001-1v-4a1 1 0 00-1-1H15a1 1 0 00-1 1v4a1 1 0 001 1h4.025A4.976 4.976 0 0123 18zm24.614 17.227L34.679 22.293a1 1 0 00-.707-.293H23a1 1 0 00-1 1v10.972a1 1 0 00.293.707l12.934 12.935a1 1 0 001.414 0l10.973-10.972a1 1 0 000-1.415zm-20.6-5.214a3 3 0 113-3 3 3 0 01-3.001 3z"/>
    </svg>