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
        <path d="M13.85 31.027l-4.921 9.932a1.151 1.151 0 001.418 1.6l4.264-1.521a1.153 1.153 0 011.472.7L17.6 46a1.151 1.151 0 002.133.088l3.118-6.878-2.351-4.946a15.961 15.961 0 01-6.65-3.237zm25.221 9.932l-4.921-9.933A15.928 15.928 0 0124 34.66c-.383 0-.759-.031-1.135-.058l5.4 11.483A1.151 1.151 0 0030.4 46l1.521-4.265a1.153 1.153 0 011.472-.7l4.264 1.521a1.151 1.151 0 001.414-1.597zM24 5.659a13 13 0 1013 13 13 13 0 00-13-13zm0 21a8 8 0 118-8 8 8 0 01-8 8z"/>
    </svg>