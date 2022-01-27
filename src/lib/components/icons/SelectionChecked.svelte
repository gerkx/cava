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
        <path d="M14 4h8v4h-8zm12 0h8v4h-8zm14 6h4V6a2 2 0 00-2-2h-4v4h2zm0 4v6.506a15.928 15.928 0 014 1.642V14zM20.506 40H14v4h8.148a15.928 15.928 0 01-1.642-4zM4 6v4h4V8h2V4H6a2 2 0 00-2 2zm0 8h4v8H4zm4 24H4v4a2 2 0 002 2h4v-4H8zM4 26h4v8H4zm32-2a12 12 0 1012 12 12 12 0 00-12-12zm7.791 8.561L35.534 42.67a1 1 0 01-1.474.081l-5.86-5.746a1 1 0 01-.014-1.415l1.541-1.572A1 1 0 0131.136 34l3.364 3.3 6.039-7.394a1 1 0 011.407-.142l1.7 1.391a1 1 0 01.145 1.406z"/>
    </svg>