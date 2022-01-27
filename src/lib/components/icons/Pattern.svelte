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
        <rect height="4" rx="1" ry="1" width="8" x="4" y="8"/>
<rect height="4" rx="1" ry="1" width="10" x="18" y="8"/>
<rect height="4" rx="1" ry="1" width="8" x="34" y="8"/>
<path d="M15 16a1 1 0 01-1-1V7a1 1 0 012 0v8a1 1 0 01-1 1zm16 0a1 1 0 01-1-1V7a1 1 0 012 0v8a1 1 0 01-1 1z"/>
<rect height="4" rx="1" ry="1" width="8" x="26" y="18"/>
<rect height="4" rx="1" ry="1" width="8" x="12" y="18"/>
<path d="M9 24a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1zm14 0a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1zm14 0a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1z"/>
<rect height="4" rx="1" ry="1" width="8" x="4" y="26"/>
<rect height="4" rx="1" ry="1" width="10" x="18" y="26"/>
<rect height="4" rx="1" ry="1" width="8" x="34" y="26"/>
<path d="M15 34a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1zm16 0a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1z"/>
<rect height="4" rx="1" ry="1" width="8" x="26" y="36"/>
<rect height="4" rx="1" ry="1" width="8" x="12" y="36"/>
<path d="M9 42a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1zm14 0a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1zm14 0a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1z"/>
    </svg>