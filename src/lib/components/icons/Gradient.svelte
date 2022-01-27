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
        <path d="M44 6H4a2 2 0 00-2 2v32a2 2 0 002 2h40a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32H6V10h36z"/>
<path opacity=".8" d="M8 10h2v28H8z"/>
<path opacity=".9" d="M6 10h2v28H6z"/>
<path opacity=".75" d="M10 10h2v28h-2z"/>
<path opacity=".7" d="M12 10h2v28h-2z"/>
<path opacity=".65" d="M14 10h2v28h-2z"/>
<path opacity=".6" d="M16 10h2v28h-2z"/>
<path opacity=".55" d="M18 10h2v28h-2z"/>
<path opacity=".5" d="M20 10h2v28h-2z"/>
<path opacity=".45" d="M22 10h2v28h-2z"/>
<path opacity=".4" d="M24 10h2v28h-2z"/>
<path opacity=".35" d="M26 10h2v28h-2z"/>
<path opacity=".3" d="M28 10h2v28h-2z"/>
<path opacity=".25" d="M30 10h2v28h-2z"/>
<path opacity=".2" d="M32 10h2v28h-2z"/>
<path opacity=".15" d="M34 10h2v28h-2z"/>
<path opacity=".1" d="M36 10h2v28h-2z"/>
<path opacity=".05" d="M38 10h2v28h-2z"/>
    </svg>