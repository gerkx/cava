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
        <path d="M44.289 40.511A3.976 3.976 0 0048 36.382a4.659 4.659 0 00-.2-1.334l-3.445-11.513c-2.35-7.856-8.954-14.7-16.391-14.7h-7.928C12.6 8.831 6 15.679 3.645 23.535L.2 35.048a4.659 4.659 0 00-.2 1.334 3.976 3.976 0 003.711 4.129 3.408 3.408 0 001.323-.273l2.2-1.762A26.7 26.7 0 0124 32.443a26.7 26.7 0 0116.771 6.033l2.2 1.762a3.408 3.408 0 001.318.273zM20.608 24.845a7.2 7.2 0 11-5.974-8.245 7.2 7.2 0 015.974 8.245zM32.2 24a4.2 4.2 0 114.2-4.2 4.2 4.2 0 01-4.2 4.2zm6 8.4a4.2 4.2 0 114.2-4.2 4.2 4.2 0 01-4.2 4.2z"/>
<circle cx="13.5" cy="23.711" r="4"/>
    </svg>