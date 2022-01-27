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
        <path d="M47.323 25.414L36.165 36.749a1 1 0 01-1.425 0l-1.658-1.685a1 1 0 010-1.4L42.59 24l-9.508-9.662a1.006 1.006 0 010-1.4l1.658-1.688a1 1 0 011.425 0l11.158 11.335a2.029 2.029 0 010 2.829zM.677 22.585L11.835 11.25a1 1 0 011.425 0l1.658 1.685a1.006 1.006 0 010 1.4L5.41 24l9.508 9.662a1 1 0 010 1.4l-1.658 1.687a1 1 0 01-1.425 0L.677 25.414a2.029 2.029 0 010-2.829zM29.1 6.3h-1.933a1 1 0 00-.966.74l-8.416 31.284a1 1 0 00.965 1.259h1.929a1 1 0 00.966-.74L30.061 7.56A1 1 0 0029.1 6.3z"/>
    </svg>