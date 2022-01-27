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
        <path d="M2 22a2 2 0 00-2 2v14a2 2 0 002 2h4V22zm44 0h-4v18h4a2 2 0 002-2V24a2 2 0 00-2-2zm-22 6c4.057 0 7.4-2.641 7.753-6H16.247c.358 3.359 3.696 6 7.753 6z"/>
<path d="M36.1 22c0 5.523-5.473 10.2-12.1 10.2S11.9 27.523 11.9 22H10v18h28V22z"/>
<circle cx="8" cy="16" r="2.2"/>
<circle cx="40" cy="16" r="2.2"/>
<circle cx="24" cy="8" r="2.2"/>
<circle cx="15" cy="10" r="2.2"/>
<circle cx="33" cy="10" r="2.2"/>
    </svg>