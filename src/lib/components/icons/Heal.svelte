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
        <path d="M43.637 4.363a8 8 0 00-11.313 0l-8.609 8.608L4.363 32.324a8 8 0 1011.313 11.313l7.93-7.93 20.031-20.031a8 8 0 000-11.313zM29.625 20.508a2.934 2.934 0 11-2.933 2.934 2.934 2.934 0 012.933-2.934zm-5.063-5.062a2.933 2.933 0 11-2.933 2.933 2.934 2.934 0 012.933-2.933zM24 26.133a2.934 2.934 0 11-2.934 2.934A2.934 2.934 0 0124 26.133zm-5.063-5.062A2.934 2.934 0 1116 24a2.934 2.934 0 012.933-2.929z"/>
    </svg>