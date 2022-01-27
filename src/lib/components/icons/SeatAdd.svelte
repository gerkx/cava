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
        <path d="M29.905 4h-11.81A8.1 8.1 0 0010 12.094V24a2 2 0 002 2h11.82A15.747 15.747 0 0138 20.324v-8.23A8.1 8.1 0 0029.905 4zM44 20a1.979 1.979 0 00-1.877 1.389A15.916 15.916 0 0148 25.58V24a4 4 0 00-4-4zM12 30a2 2 0 00-2 2v8a2 2 0 002 2h9.344a15.846 15.846 0 01.073-12zM4 20a4 4 0 00-4 4v20a2 2 0 002 2h2a2 2 0 002-2V22a2 2 0 00-2-2zm20.2 16.1a11.9 11.9 0 1011.9-11.9 11.9 11.9 0 00-11.9 11.9zm13.4-8a.5.5 0 01.5.5v5.5h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5.5h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5z"/>
    </svg>