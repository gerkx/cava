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
        <path d="M24 4.2A19.8 19.8 0 1043.8 24 19.8 19.8 0 0024 4.2zM24 40a15.991 15.991 0 01-11.324-27.291L24 23.99V8a16 16 0 110 32z"/>
<path d="M35.3 12.683L24 24h16a15.952 15.952 0 00-4.7-11.317z" opacity=".2"/>
<path d="M24 24l11.287 11.331A16 16 0 0040 24z" opacity=".33"/>
<path d="M24 24v16a15.946 15.946 0 0011.284-4.671z" opacity=".47"/>
<path d="M24 40V24L12.685 35.3A15.947 15.947 0 0024 40z" opacity=".6"/>
<path d="M24 24H8a15.948 15.948 0 004.685 11.3z" opacity=".7"/>
<path d="M12.674 12.711A15.95 15.95 0 008 24h16z" opacity=".8"/>
    </svg>