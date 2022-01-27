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
        <path d="M37.9 37.8c.3.3.5.7 0 1.1l-6.2 4c-.5.3-.7.1-.9-.4l-7.7-13.4L13 40.2c-.1.2-.4.4-.7 0l-4.8-5c-.5-.3-.4-.6 0-.9l11.4-9.5-13-4.9c-.2 0-.5-.4-.3-.9L9 12.2a.526.526 0 01.9-.2l11.4 7.4.7-14.6a.526.526 0 01.6-.6l8.3 1.1c.5 0 .6.2.5.7l-3.9 14.3 13.2-4c.3-.2.6-.2.8.4l1.3 7.4c.1.5 0 .7-.4.7l-13.8 1.1z"/>
    </svg>