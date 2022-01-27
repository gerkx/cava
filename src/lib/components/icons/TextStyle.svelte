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
        <path d="M12.112 30.934c.692 3.979 3.523 11.094 10.067 11.094a6.383 6.383 0 006.8-6.632c0-2.834-1.761-5.306-4.97-7.718l-1.888-1.327c-3.964-2.954-7.488-6.33-7.488-11.335C14.628 7.9 20.606 3.5 28.345 3.5a21.418 21.418 0 017.11 1.206c1.133.362 1.951.723 2.58.965a91.317 91.317 0 00-.377 9.225l-2.2.18c-.566-3.8-2.076-9.164-7.613-9.164a6 6 0 00-6.041 6.21c0 2.954 1.762 4.884 5.1 7.175l1.888 1.266c4.341 3.015 7.928 6.331 7.928 11.758 0 7.6-6.8 12.179-15.227 12.179-5.223 0-9.627-2.05-11.452-3.738.063-1.387.063-4.763 0-9.587z"/>
    </svg>