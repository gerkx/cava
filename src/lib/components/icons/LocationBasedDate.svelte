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
        <path d="M28 19v8a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1h-8a1 1 0 00-1 1z"/>
<path d="M45 4h-7V1a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H18V1a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H7a1 1 0 00-1 1v6.277a15.569 15.569 0 014-1.057V8h4v1a1 1 0 001 1h2a1 1 0 001-1V8h16v1a1 1 0 001 1h2a1 1 0 001-1V8h4v24H26.107a44.988 44.988 0 01-1.943 4H45a1 1 0 001-1V5a1 1 0 00-1-1z"/>
<path d="M12 14.078A11.678 11.678 0 00.322 25.756C.322 32.205 12 46.922 12 46.922s11.678-14.717 11.678-21.166A11.678 11.678 0 0012 14.078zm0 16.2a4.525 4.525 0 114.525-4.525A4.525 4.525 0 0112 30.281z"/>
    </svg>