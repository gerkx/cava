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
        <path d="M31.992 24.921l4.57-5.265A1 1 0 0035.807 18H25.07zm-7.164-7.163L34.3 3.555A1 1 0 0033.465 2H17.387a1 1 0 00-.948.684L14.768 7.7zm-5.605 8.535l-7.88 20.937a.5.5 0 00.846.5l13.232-15.239zM11.232 18.3l-2.127 6.384A1 1 0 0010.054 26h8.876z"/>
<rect height="56.215" rx="1" ry="1" transform="rotate(-45 23.875 23.875)" width="4" x="21.875" y="-4.232"/>
    </svg>