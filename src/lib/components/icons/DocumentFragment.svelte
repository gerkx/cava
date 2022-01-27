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
        <path d="M46 6H2a2.071 2.071 0 00-2 2v32a2 2 0 002 2h44a2 2 0 002-2V8a2 2 0 00-2-2zM4 10h20v20c-1.04-1.837-2.879-3.674-3.714-3.619-.8.1-3.82 2.143-4.81 2.143-.886 0-4.4-3.286-5.381-3.286C7.333 25.238 5.81 28.19 4 30zm40 28H4v-4h40zm0-8H28v-4h16zm0-8H28v-4h16zm0-8H28v-4h16z"/>
<circle cx="17.5" cy="18.5" r="3"/>
    </svg>