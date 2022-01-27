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
        <path d="M14.5 33.5c1.56-.466 4.393-1.723 6.2-2.266L16.754 27.3z"/>
<path d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm-2.058 28.587a.864.864 0 01-.365.219c-1.271.382-8.552 2.993-8.8 3.049a.237.237 0 01-.054.005c-.285 0-.789-.417-.689-.748l3.048-8.791a.88.88 0 01.221-.371L30.961 10.4a1.207 1.207 0 01.815-.358h.034a1.069 1.069 0 01.762.311l5.071 5.071a1.075 1.075 0 01.308.834 1.208 1.208 0 01-.356.777z"/>
    </svg>