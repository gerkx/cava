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
        <path d="M38 6H10a2 2 0 00-2 2v30a2 2 0 002 2h2v3a1 1 0 001 1h2a1 1 0 001-1v-3h16v3a1 1 0 001 1h2a1 1 0 001-1v-3h2a2 2 0 002-2V8a2 2 0 00-2-2zm-2 30H12V24h24zM12 22V10h24v12z"/>
<path d="M24 14a2.3 2.3 0 102.3 2.3A2.3 2.3 0 0024 14zm0 19.35a2.3 2.3 0 10-2.3-2.3 2.3 2.3 0 002.3 2.3z"/>
    </svg>