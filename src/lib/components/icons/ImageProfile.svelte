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
        <path d="M46 6H2a2 2 0 00-2 2v32a2 2 0 002 2h44a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32h-5.368c-1.373-2.2-4.019-4.368-8.978-4.871a1.535 1.535 0 01-1.329-1.541v-2.224a1.539 1.539 0 01.392-.993 11.746 11.746 0 002.671-7.33c0-5.547-2.942-8.647-7.387-8.647s-7.471 3.222-7.471 8.647a11.873 11.873 0 002.8 7.329 1.539 1.539 0 01.392.993v2.214a1.528 1.528 0 01-1.333 1.542c-5.112.445-7.741 2.635-9.065 4.88H4V10h40z"/>
    </svg>