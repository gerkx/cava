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
        <path d="M17.338 11.748l10.41-10.41a1.051 1.051 0 011.487 0l1.485 1.485a1.052 1.052 0 010 1.488L20.31 14.72a1.052 1.052 0 01-1.488 0l-1.485-1.485a1.052 1.052 0 010-1.488zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5zM26.941 22.942L24 20 2.586 39.758a2 2 0 000 2.828l2.828 2.828a2 2 0 002.828 0L20.63 31.987a15.906 15.906 0 016.311-9.045zm8.953-2.837L40 16l-8-8-8 8 5.5 5.5a15.809 15.809 0 016.394-1.395zm8.556 2.443l2.25-2.254a1.053 1.053 0 000-1.487l-1.483-1.487a1.053 1.053 0 00-1.487 0l-3.394 3.394a15.806 15.806 0 014.114 1.834z"/>
    </svg>