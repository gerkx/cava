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
        <path d="M12 24.1A11.9 11.9 0 1023.9 36 11.9 11.9 0 0012 24.1zm8 13.4a.5.5 0 01-.5.5H14v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38H4.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H10v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"/>
<path d="M42 4H6a2 2 0 00-2 2v16.275a15.8 15.8 0 0116 0V20h8v8h-2.275a15.809 15.809 0 011.648 4H28v8h-.627a15.809 15.809 0 01-1.648 4H42a2 2 0 002-2V6a2 2 0 00-2-2zM28 16h-8V8h8zm12 24h-8v-8h8zm0-12h-8v-8h8zm0-12h-8V8h8z"/>
    </svg>