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
        <path d="M37.332 26.2a.787.787 0 00-.527-.2.8.8 0 00-.8.8V32H24V14h12v5.2a.8.8 0 00.8.8.787.787 0 00.527-.2l8.524-8.445a.5.5 0 000-.7L37.332 2.2a.787.787 0 00-.527-.2.8.8 0 00-.8.8V8H20a2 2 0 00-2 2v10H5a1 1 0 00-1 1v4a1 1 0 001 1h13v10a2 2 0 002 2h16v5.2a.8.8 0 00.8.8.787.787 0 00.527-.2l8.524-8.445a.5.5 0 000-.7z"/>
    </svg>