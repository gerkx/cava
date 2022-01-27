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
        <rect height="4" rx="1" ry="1" width="4" x="22" y="42"/>
<rect height="4" rx="1" ry="1" width="4" x="22" y="34"/>
<rect height="4" rx="1" ry="1" width="4" x="22" y="26"/>
<rect height="4" rx="1" ry="1" width="4" x="22" y="18"/>
<rect height="4" rx="1" ry="1" width="4" x="22" y="10"/>
<rect height="4" rx="1" ry="1" width="4" x="22" y="2"/>
<path d="M44 38.743V9.257a1 1 0 00-1.743-.669L28.988 23.331a1 1 0 000 1.338l13.269 14.743A1 1 0 0044 38.743zM7.6 16.033L14.771 24 7.6 31.967zM5.008 8.255A1 1 0 004 9.257v29.486a1 1 0 001.008 1 .977.977 0 00.735-.333l13.269-14.741a1 1 0 000-1.338L5.743 8.588a.977.977 0 00-.735-.333z"/>
    </svg>