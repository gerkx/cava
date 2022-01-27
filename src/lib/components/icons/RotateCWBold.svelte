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
        <path d="M24 3.9a19.9 19.9 0 0115.444 7.366l4.9-3.176a.8.8 0 011.11.239.788.788 0 01.116.553L43.119 20.63a.5.5 0 01-.588.382l-11.724-2.559a.785.785 0 01-.458-.331.8.8 0 01.235-1.111l5.478-3.552A15.97 15.97 0 1038.3 31.05l.015.008a1.976 1.976 0 011.722-1.042 2 2 0 012 2 1.969 1.969 0 01-.18.812l.018.009A19.993 19.993 0 1124 3.9z"/>
    </svg>