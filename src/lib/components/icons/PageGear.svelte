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
        <path d="M46.1 32.207h-3.14a9.078 9.078 0 00-1.326-3.219l2.235-2.235a.9.9 0 000-1.268l-1.359-1.359a.9.9 0 00-1.268 0l-2.235 2.235a9.08 9.08 0 00-3.218-1.326V21.9a.9.9 0 00-.9-.9H33.1a.9.9 0 00-.9.9v3.139a9.08 9.08 0 00-3.218 1.326l-2.235-2.235a.9.9 0 00-1.268 0l-1.359 1.359a.9.9 0 000 1.268l2.235 2.235a9.078 9.078 0 00-1.326 3.219H21.9a.9.9 0 00-.9.9V34.9a.9.9 0 00.9.9h3.14a9.078 9.078 0 001.326 3.219l-2.235 2.235a.9.9 0 000 1.268l1.359 1.359a.9.9 0 001.268 0l2.235-2.235a9.083 9.083 0 003.218 1.326V46.1a.9.9 0 00.9.9H34.9a.9.9 0 00.9-.9v-3.14a9.083 9.083 0 003.218-1.326l2.235 2.235a.9.9 0 001.268 0l1.359-1.359a.9.9 0 000-1.268l-2.235-2.235a9.078 9.078 0 001.326-3.219H46.1a.9.9 0 00.9-.9V33.1a.9.9 0 00-.9-.893zM34 37.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"/>
<path d="M18.524 38H6V14h36v6.158a16.035 16.035 0 014 3.283V8a2 2 0 00-2-2H4a2 2 0 00-2 2v32a2 2 0 002 2h16.158a15.862 15.862 0 01-1.634-4z"/>
    </svg>