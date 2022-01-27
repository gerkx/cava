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
        <path d="M9.226 36.678c.058.109.253.392.549.816a44.252 44.252 0 015.348 9.081c.056.137.3 1.281.377 1.425h25.353c1.5-4.088 2.612-10.2.829-12.83-.192-.285-1.011-1.088-3.4-1.711a10.929 10.929 0 01-.816-.9 4.645 4.645 0 00-2.74-1.71 9.265 9.265 0 00-1.534-.025 1.906 1.906 0 01-1.843-1.007 4.33 4.33 0 00-2.508-1.534c-1.066-.171-1.625.542-2.293.5-.558-.241-.714-1.961-.714-1.961V15.229c0-1.606-.851-3.246-2.842-3.246-2.168 0-2.842 1.832-2.842 3.246v15.3a13.456 13.456 0 01-1.006 5.127c-.158.31-.8 1.157-1.129 1.625C16.194 35.669 14.167 34 13.36 32.3a7.644 7.644 0 00-3.489-3.371 2.138 2.138 0 00-2.377.313c-1.941 1.189-.324 3.919 1.091 6.327.239.411.468.787.641 1.109z"/>
<path d="M23 2a12.992 12.992 0 00-7 23.942v-3.813a10 10 0 1114 0v3.811A12.992 12.992 0 0023 2z"/>
    </svg>