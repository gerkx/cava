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
        <rect height="4" rx="1" ry="1" width="4" x="2" y="22"/>
<rect height="4" rx="1" ry="1" width="4" x="10" y="22"/>
<rect height="4" rx="1" ry="1" width="4" x="18" y="22"/>
<rect height="4" rx="1" ry="1" width="4" x="26" y="22"/>
<rect height="4" rx="1" ry="1" width="4" x="34" y="22"/>
<rect height="4" rx="1" ry="1" width="4" x="42" y="22"/>
<path d="M9.257 44h29.486a1 1 0 00.669-1.743L24.669 28.988a1 1 0 00-1.338 0L8.588 42.257A1 1 0 009.257 44zM31.968 7.6L24 14.771 16.032 7.6zM38.743 4H9.257a1 1 0 00-.669 1.743l14.743 13.269a1 1 0 001.338 0L39.412 5.743A1 1 0 0038.743 4z"/>
    </svg>