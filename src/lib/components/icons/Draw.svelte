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
        <path d="M43.763 11.621l-7.42-7.382a1.889 1.889 0 00-2.649.179L29.4 8.712l9.88 9.88 4.31-4.319a1.886 1.886 0 00.173-2.652zM26.712 11.4L8.82 29.292a2.233 2.233 0 00-.521.814L4.115 41.659a1.655 1.655 0 002.171 2.186L17.9 39.713a2.231 2.231 0 00.827-.526l17.87-17.9zm-9.658 25.745c-3.1 1.116-6.975 2.517-9.652 3.475l3.456-9.653z"/>
    </svg>