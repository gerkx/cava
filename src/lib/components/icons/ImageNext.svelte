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
        <circle cx="19.5" cy="18.404" r="3.094"/>
<path d="M39.669 31.722L48 23l-8.331-8.708a1 1 0 00-1.669.743V20H26.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H38v4.979a1 1 0 001.669.743z"/>
<path d="M34 16v-6a2 2 0 00-2-2H2a2 2 0 00-2 2v28a2 2 0 002 2h30a2 2 0 002-2v-8h-4v3.311c-1.92-2.034-5.14-4.645-6.682-4.583-2.409 0-3.5 4.006-6.753 4.006-2.2 0-3.366-7.519-5.838-7.519S6.479 28.587 4 31.7V12h26v4z"/>
    </svg>