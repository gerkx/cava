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
        <path d="M12.1 36A11.9 11.9 0 1024 24.1 11.9 11.9 0 0012.1 36zm3.9-1.5a.5.5 0 01.5-.5h15a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5z"/>
<path d="M42 4H6a2 2 0 00-2 2v36a2 2 0 002 2h4.335a15.812 15.812 0 01-1.682-4H8v-8h.6a15.766 15.766 0 011.612-4H8v-8h6v3.545a15.827 15.827 0 016-3.017V10h8v10.528a15.827 15.827 0 016 3.017V20h6v8h-2.214a15.766 15.766 0 011.614 4h.6v8h-.653a15.812 15.812 0 01-1.682 4H42a2 2 0 002-2V6a2 2 0 00-2-2zM14 16H8V8h6zm26 0h-6V8h6z"/>
    </svg>