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
        <path d="M42 6H6a2 2 0 00-2 2v28a2 2 0 002 2h12l6 10 6-10 11.994-.006a2 2 0 002-2L44 8a2 2 0 00-2-2zm-21.2 4.828a.355.355 0 01.242-.4A11 11 0 0123.951 10a12.679 12.679 0 012.959.323.433.433 0 01.29.4v2.593c0 3.025-.824 11.523-.968 12.6 0 .108-.05.217-.34.217h-3.88a.3.3 0 01-.339-.217c-.1-1.008-.873-9.471-.873-12.495zM24 35a2.9 2.9 0 01-3.2-2.956A3.014 3.014 0 0124 29a2.967 2.967 0 013.2 3.044A2.9 2.9 0 0124 35z"/>
    </svg>