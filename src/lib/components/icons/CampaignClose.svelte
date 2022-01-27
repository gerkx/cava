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
        <path d="M10.157 26H4.1A20 20 0 0022 43.9v-6.06A14.015 14.015 0 0110.157 26zm0-4A14.015 14.015 0 0122 10.16V4.1A20 20 0 004.1 22zm27.685 0H43.9A20 20 0 0026 4.1v6.06A14.015 14.015 0 0137.842 22zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8.132 17.2a.5.5 0 010 .707l-2.122 2.125a.5.5 0 01-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 01-.707 0l-2.128-2.122a.5.5 0 010-.707l5.3-5.3-5.3-5.3a.5.5 0 010-.707l2.122-2.121a.5.5 0 01.707 0l5.3 5.3 5.3-5.3a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-5.3 5.3zM29.451 21.523a5.992 5.992 0 10-7.929 7.929 15.941 15.941 0 017.929-7.929z"/>
    </svg>