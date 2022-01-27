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
        <path d="M4.946 38H27.61a11.995 11.995 0 019.98-17.99s-.01-.947-.01-1.476A10.31 10.31 0 0027.124 8c-5.392 0-9.008 4.182-10.274 8.499a10.404 10.404 0 00-2.839-.396 8.492 8.492 0 00-8.657 8.282 6.627 6.627 0 00.18 2.15C2.426 26.535 0 29.987 0 32.347 0 35.748 1.774 38 4.946 38z"/>
<path d="M38 22a10 10 0 1010 10 10.01 10.01 0 00-10-10zm-1.487 3.2c0-.071.2-.182.346-.238a3.026 3.026 0 011.1-.117 3.837 3.837 0 011.16.117c.15.056.368.184.368.238v1.849a57.38 57.38 0 01-.488 6.371c0 .055-.038.33-.218.33h-1.565c-.12 0-.195-.259-.223-.33-.06-.508-.48-4.36-.48-6.371zM38 38.882a1.65 1.65 0 111.652-1.652A1.652 1.652 0 0138 38.882z"/>
    </svg>