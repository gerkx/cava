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
        <path d="M20 20H5a1 1 0 00-1 1v4a1 1 0 001 1h15zM4 9v4a1 1 0 001 1h5V8H5a1 1 0 00-1 1zm33-1H20v6h17a1 1 0 001-1V9a1 1 0 00-1-1z"/>
<rect height="10" rx="2.449" ry="2.449" width="6" x="12" y="6"/>
<rect height="10" rx="2.449" ry="2.449" width="6" x="30" y="30"/>
<rect height="10" rx="2.449" ry="2.449" width="6" x="22" y="18"/>
<path d="M43 32h-5v6h5a1 1 0 001-1v-4a1 1 0 00-1-1zM4 33v4a1 1 0 001 1h23v-6H5a1 1 0 00-1 1z"/>
    </svg>