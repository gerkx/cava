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
        <path d="M42 18h-8a2 2 0 00-2 2v.628a15.678 15.678 0 0112 1.647V20a2 2 0 00-2-2zm0-14h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zM29 8h-6a1 1 0 00-1 1v13h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v2.461A15.968 15.968 0 0128.461 22H26V12h3a1 1 0 001-1V9a1 1 0 00-1-1zm-15 6H6a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V16a2 2 0 00-2-2zm10.2 22.1a11.9 11.9 0 1011.9-11.9 11.9 11.9 0 00-11.9 11.9zm13.4-8a.5.5 0 01.5.5v5.5h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5.5h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5z"/>
    </svg>