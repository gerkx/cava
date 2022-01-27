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
        <path d="M32 20.506a16.063 16.063 0 016-.381V12a2 2 0 00-2-2H20v6h12zM20 36a15.99 15.99 0 01.506-4H16V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v6H4a2 2 0 00-2 2v2a2 2 0 002 2h6v20a2 2 0 002 2h8.125A16.113 16.113 0 0120 36zm16-12a12 12 0 1012 12 12 12 0 00-12-12zm5.119 12.938l-7.434 8.5a.769.769 0 01-1.288-.8l2.508-5.955-3.548-1.523a1.328 1.328 0 01-.475-2.094l7.434-8.5a.769.769 0 011.288.8L37.1 33.322l3.548 1.523a1.328 1.328 0 01.471 2.093z"/>
    </svg>