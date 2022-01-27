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
        <path d="M36.688.043c-2.8 0-8.87 2.178-12.354 8.305C20.849 2.221 14.78.043 11.979.043a5.979 5.979 0 100 11.957h24.709a5.979 5.979 0 100-11.957zM11.979 9a2.979 2.979 0 110-5.957c1.712 0 6.288 1.5 9.247 5.957zm24.709 0h-9.247c2.959-4.458 7.535-5.957 9.247-5.957a2.979 2.979 0 110 5.957zM4 42a2 2 0 002 2h16V28H4zM0 18v4a2 2 0 002 2h20v-8H2a2 2 0 00-2 2zm28 26h14a2 2 0 002-2V28H28zm18-28H28v8h18a2 2 0 002-2v-4a2 2 0 00-2-2z"/>
    </svg>