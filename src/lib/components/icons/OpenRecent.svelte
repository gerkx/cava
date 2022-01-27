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
        <path d="M20.423 33.443a15.881 15.881 0 0125.663-9.7l1.168-3.506A1.7 1.7 0 0045.641 18H40v-6a2 2 0 00-2-2H23.266l-4.844-4.832A4 4 0 0015.6 4H6a4 4 0 00-4 4v32a2 2 0 002 2h17.347a15.779 15.779 0 01-.924-8.557zm-8.879-14.075L6 36V8h9.6l6.015 6H36v4H13.441a2 2 0 00-1.897 1.368z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm0 20.8a8.887 8.887 0 01-1.5-17.649v9.37l3.688 3.688a.5.5 0 00.708 0L40.31 38.9a.5.5 0 000-.707l-2.81-2.814v-8.128A8.887 8.887 0 0136 44.9z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm0 20.8a8.887 8.887 0 01-1.5-17.649v9.37l3.688 3.688a.5.5 0 00.708 0L40.31 38.9a.5.5 0 000-.707l-2.81-2.814v-8.128A8.887 8.887 0 0136 44.9z"/>
    </svg>