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
        <path d="M42 4H6a2 2 0 00-2 2v26a2 2 0 002 2h12l5.571 9.285a.5.5 0 00.858 0L30 34h11.994a2.005 2.005 0 002-2.006L44 6a2 2 0 00-2-2zM24.244 32.415a3.446 3.446 0 01-3.638-3.641 3.5 3.5 0 013.638-3.6 3.5 3.5 0 013.641 3.6 3.411 3.411 0 01-3.641 3.641zm4.117-15.159l-.232.221c-.944.892-2.013 1.9-2.013 2.523a2.707 2.707 0 00.4 1.4.809.809 0 01-.686 1.278h-2.812a1.269 1.269 0 01-.934-.364 4.273 4.273 0 01-.938-2.669c0-1.831 1.128-2.958 2.688-4.519 1.03-1.03 1.481-1.557 1.481-2.27 0-.355 0-1.3-2.071-1.3a7.615 7.615 0 00-3.773 1l-.244.1h-.159a.82.82 0 01-.83-.828V8.684a.956.956 0 01.481-.917 10.931 10.931 0 015.236-1.212c4 0 6.686 2.31 6.686 5.749a6.4 6.4 0 01-2.28 4.952z"/>
    </svg>