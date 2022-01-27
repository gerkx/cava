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
        <rect height="28" rx="2" ry="2" width="28" x="10" y="4"/>
<path d="M2 28h4V8H2a2 2 0 00-2 2v16a2 2 0 002 2zm44 0h-4V8h4a2 2 0 012 2v16a2 2 0 01-2 2z"/>
<circle cx="20" cy="42" r="3"/>
<circle cx="28" cy="42" r="2.25"/>
<circle cx="12" cy="42" r="2.25"/>
<circle cx="36" cy="42" r="2.25"/>
    </svg>