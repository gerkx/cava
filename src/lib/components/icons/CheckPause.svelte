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
        <path d="M31.94 20.643l7.318-9.406a1 1 0 00-.175-1.4L36.111 7.52a1 1 0 00-1.4.175l-17.697 22.73L8.4 21.811a1 1 0 00-1.414 0l-2.693 2.695a1 1 0 000 1.414l12.431 12.447a1 1 0 001.5-.093l1.886-2.424a15.888 15.888 0 0111.83-15.207z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM34 42h-4V30h4zm8 0h-4V30h4z"/>
    </svg>