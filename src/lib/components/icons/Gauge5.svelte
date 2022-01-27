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
        <path d="M45.13 34.29a1.685 1.685 0 01-1.708 1.525l-19.769.167a3.7 3.7 0 01-3.62-4.054 3.7 3.7 0 014.32-3.3l19.387 3.843a1.685 1.685 0 011.39 1.819z"/>
<path d="M4.264 24.745a19.982 19.982 0 0139.684 2.416 1.008 1.008 0 01-1.206 1.006l-2.026-.4a1 1 0 01-.8-.916 16.015 16.015 0 00-4.336-9.824A15.456 15.456 0 0027.6 12.4 16.031 16.031 0 008 28a15.865 15.865 0 001.176 5.966.988.988 0 01-.207 1.078l-1.529 1.53a.994.994 0 01-1.6-.256 19.8 19.8 0 01-1.576-11.573z"/>
    </svg>