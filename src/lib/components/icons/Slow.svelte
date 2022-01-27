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
        <path d="M43.255 13.339a3.678 3.678 0 00-3.678 3.678 4.91 4.91 0 001.32 2.689l-6.23 11.955 1.017-13.5c1.185-.366 2.9-1.829 2.9-3.491a3.678 3.678 0 00-7.356 0 4.332 4.332 0 002.462 3.371l-.6 12.287-7.74.017a12.225 12.225 0 10-20.689-8.83c0 4.628 1.686 9.512 9.41 10.275C11.168 34.858 5.5 35.4 3.06 35.716 1.225 35.955 1.907 38 3.756 38h36.722c1.377 0 2.628-.823.142-2.365-.993-.616-1.175-1.859-1.721-2.549a5.385 5.385 0 00-2.164-1.807l5.777-10.822c.1.01.6.238.743.238a3.678 3.678 0 000-7.356z"/>
    </svg>