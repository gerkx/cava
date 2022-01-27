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
        <path d="M26 32h-4v11a1 1 0 001 1h2a1 1 0 001-1zm11.5-15a7.392 7.392 0 00-.846.048A9.516 9.516 0 0037 14.5 9.638 9.638 0 0027.5 5c-5.125-.2-9.106 2.805-9.708 7.472A8.006 8.006 0 007.713 20.2a15.549 15.549 0 00.557 2.867A4.5 4.5 0 107.5 32H22v-8h-6.2a.8.8 0 01-.8-.8.787.787 0 01.2-.527l8.445-8.524a.5.5 0 01.7 0l8.455 8.519a.787.787 0 01.2.527.8.8 0 01-.8.8H26v8h11.5a7.5 7.5 0 000-15z"/>
    </svg>