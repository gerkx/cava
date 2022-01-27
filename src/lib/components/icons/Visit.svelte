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
        <path d="M44 6H4a2 2 0 00-2 2v30a2 2 0 002 2h3.028a11.7 11.7 0 012.893-4H6V14h36v22h-4.165a12.1 12.1 0 013 4H44a2 2 0 002-2V8a2 2 0 00-2-2z"/>
<path d="M27.712 35.2v-1.95a1.349 1.349 0 01.344-.87 10.3 10.3 0 002.344-6.421c0-4.863-2.579-7.581-6.476-7.581s-6.55 2.824-6.55 7.581a10.409 10.409 0 002.454 6.426 1.35 1.35 0 01.344.87V35.2A1.339 1.339 0 0119 36.548c-7.83.681-9 6.037-9 8.149 0 .235-.017 3.03 0 3.261h27.922s.024-3.027.024-3.261c0-2.024-1.383-7.361-9.071-8.142a1.345 1.345 0 01-1.163-1.355z"/>
    </svg>