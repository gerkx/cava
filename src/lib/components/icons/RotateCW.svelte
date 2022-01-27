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
        <circle cx="40.382" cy="31.925" r="2"/>
<circle cx="9.215" cy="34.823" r="2"/>
<circle cx="14.833" cy="39.85" r="2"/>
<circle cx="22.108" cy="42.215" r="2"/>
<circle cx="29.559" cy="41.506" r="2"/>
<circle cx="35.946" cy="37.839" r="2"/>
<path d="M24 4.1a19.8 19.8 0 0114.976 6.86l5.508-2.375a.5.5 0 01.678.6L41.647 21.3l-12.589-5.141a.5.5 0 01-.061-.9l6.113-2.635A15.9 15.9 0 008.055 24a12.246 12.246 0 00.373 3.38 1.979 1.979 0 11-3.845.926A18.412 18.412 0 014.1 24 19.9 19.9 0 0124 4.1z"/>
    </svg>