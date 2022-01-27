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
        <path d="M46 14H10a2 2 0 00-2 2v24a2 2 0 002 2h36a2 2 0 002-2V16a2 2 0 00-2-2zm-34 4h16v12c-1.04-1.837-2.879-3.674-3.714-3.619-.8.1-3.82 2.143-4.81 2.143-.886 0-2.741-2.774-3.726-2.774-2.762 0-1.94 2.44-3.75 4.25zm32 20H12v-4h32zm0-8H32v-4h12zm0-8H32v-4h12z"/>
<circle cx="21.5" cy="22.5" r="3"/>
<path d="M4 11a1 1 0 011-1h35V7a1 1 0 00-1-1H1a1 1 0 00-1 1v26a1 1 0 001 1h3z"/>
    </svg>