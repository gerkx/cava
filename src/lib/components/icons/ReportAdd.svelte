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
        <path d="M20.728 40H15a1 1 0 01-1-1v-2a1 1 0 011-1h5.2a15.893 15.893 0 01.527-4H15a1 1 0 01-1-1v-2a1 1 0 011-1h7.375A15.943 15.943 0 0130 21.317V9a1 1 0 011-1h2a1 1 0 011 1v11.254a14.491 14.491 0 014-.031V6a2 2 0 00-2-2H12a2 2 0 00-2 2v36a2 2 0 002 2h10.375a15.8 15.8 0 01-1.647-4zM22 15a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1zm-8 4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1z"/>
<path d="M24.2 36.1a11.9 11.9 0 1011.9-11.9 11.9 11.9 0 00-11.9 11.9zm13.4-8a.5.5 0 01.5.5v5.5h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5.5h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5z"/>
    </svg>