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
        <path d="M2.87 34.29a1.685 1.685 0 001.708 1.525l19.769.167a3.7 3.7 0 003.62-4.054 3.7 3.7 0 00-4.32-3.3L4.26 32.471a1.685 1.685 0 00-1.39 1.819z"/>
<path d="M43.736 24.745a19.982 19.982 0 00-39.683 2.416 1.008 1.008 0 001.206 1.006l2.026-.4a1 1 0 00.8-.916 16.015 16.015 0 014.336-9.824A15.456 15.456 0 0120.4 12.4 16.031 16.031 0 0140 28a15.865 15.865 0 01-1.176 5.966.988.988 0 00.207 1.078l1.529 1.53a.994.994 0 001.6-.256 19.8 19.8 0 001.576-11.573z"/>
    </svg>