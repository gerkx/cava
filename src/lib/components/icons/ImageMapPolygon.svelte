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
        <path d="M47 0H37a1 1 0 00-1 1v7.478l-6 2.667V11a1 1 0 00-1-1H19a1 1 0 00-1 1v1.618l-6-1.333V5a1 1 0 00-1-1H1a1 1 0 00-1 1v10a1 1 0 001 1h4.139l4.923 16H9a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-3.972l12-2V39a1 1 0 001 1h10a1 1 0 001-1V29a1 1 0 00-1-1h-2.054l2.462-16H47a1 1 0 001-1V1a1 1 0 00-1-1zM22 14h4v4h-4zM8 12H4V8h4zm8 28h-4v-4h4zm16-11v3.973l-12 2V33a1 1 0 00-1-1h-4.754L9.322 16H11a1 1 0 00.926-.634L18 16.716V21a1 1 0 001 1h10a1 1 0 001-1v-5.478L37.924 12h1.438L36.9 28H33a1 1 0 00-1 1zm8 7h-4v-4h4zm4-28h-4V4h4z"/>
    </svg>