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
        <path d="M8 8h32v32H8zM4 6v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"/>
<path opacity=".75" d="M8 40v-2h32v2z"/>
<path opacity=".7" d="M8 38v-2h32v2z"/>
<path opacity=".65" d="M8 36v-2h32v2z"/>
<path opacity=".6" d="M8 34v-2h32v2z"/>
<path opacity=".55" d="M8 32v-2h32v2z"/>
<path opacity=".5" d="M8 30v-2h32v2z"/>
<path opacity=".45" d="M8 28v-2h32v2z"/>
<path opacity=".4" d="M8 26v-2h32v2z"/>
<path opacity=".35" d="M8 24v-2h32v2z"/>
<path opacity=".3" d="M8 22v-2h32v2z"/>
<path opacity=".25" d="M8 20v-2h32v2z"/>
<path opacity=".2" d="M8 18v-2h32v2z"/>
<path opacity=".15" d="M8 16v-2h32v2z"/>
<path opacity=".1" d="M8 14v-2h32v2z"/>
<path opacity=".05" d="M8 12v-2h32v2z"/>
    </svg>