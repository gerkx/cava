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
        <circle cx="32" cy="32" r="3.307"/>
<circle cx="32" cy="16" r="3.307"/>
<path d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm8 34.1a6.122 6.122 0 01-6.093-7.266L18.863 27.8a6.2 6.2 0 110-7.606l7.044-3.131a6.252 6.252 0 111.23 2.737l-7.044 3.13a5.33 5.33 0 010 2.132l7.043 3.138A6.189 6.189 0 1132 38.2z"/>
    </svg>