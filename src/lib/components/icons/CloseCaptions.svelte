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
        <path d="M42 8H6a6 6 0 00-6 6v20a6 6 0 006 6h36a6 6 0 006-6V14a6 6 0 00-6-6zM22.217 18.149a1.082 1.082 0 01-.492.954l-.432.266-.611-.243a7.928 7.928 0 00-3.123-.5 4.961 4.961 0 00-5.36 5.335c0 5.129 4.51 5.389 5.415 5.389a8.766 8.766 0 003.037-.41l.412-.145.509.218a1.049 1.049 0 01.481.921v2.417a1.245 1.245 0 01-.76 1.2 12.83 12.83 0 01-4.086.555C11 34.1 6.984 30.152 6.984 24.041c0-6.066 4.273-10.141 10.63-10.141a10.114 10.114 0 013.9.538 1.212 1.212 0 01.707 1.132zm18 0a1.082 1.082 0 01-.492.954l-.432.266-.611-.243a7.928 7.928 0 00-3.123-.5 4.961 4.961 0 00-5.36 5.335c0 5.129 4.51 5.389 5.415 5.389a8.766 8.766 0 003.037-.41l.412-.145.509.218a1.049 1.049 0 01.481.921v2.417a1.245 1.245 0 01-.76 1.2 12.83 12.83 0 01-4.086.555c-6.21 0-10.223-3.948-10.223-10.059 0-6.066 4.273-10.141 10.63-10.141a10.114 10.114 0 013.9.538 1.212 1.212 0 01.707 1.132z"/>
    </svg>