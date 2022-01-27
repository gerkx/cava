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
        <rect height="2" rx=".5" ry=".5" width="24" x="12" y="18"/>
<path d="M47.109 15.406L25.109.74a2 2 0 00-2.218 0l-22 14.666A2 2 0 000 17.07v19.836l13.951-7.666L.716 20H8v-7a1 1 0 011-1h30a1 1 0 011 1v7h7.284l-13.253 9.251L48 36.959V17.07a2 2 0 00-.891-1.664z"/>
<path d="M30.269 31.743l-4.062 2.687a4 4 0 01-4.414 0l-4.075-2.7L0 41.47V42a2 2 0 002 2h44a2 2 0 002-2v-.472zm4.542-7.291a.25.25 0 00-.148-.452H13.374a.25.25 0 00-.149.45l1.819 1.35a1 1 0 00.594.2h16.741a1 1 0 00.593-.2z"/>
    </svg>