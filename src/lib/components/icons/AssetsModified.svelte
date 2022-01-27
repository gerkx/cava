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
        <path d="M16.958 34.7a5 5 0 011.256-2.106l.595-.594H6V8h36v7l4 4V6a2 2 0 00-2-2H4a2 2 0 00-2 2v28a2 2 0 002 2h12.571z"/>
<path d="M45.526 25.247l-5.765-5.765a1.214 1.214 0 00-.866-.353h-.038a1.371 1.371 0 00-.927.406L22.043 35.423a1 1 0 00-.251.421l-2.777 9.306c-.114.376.459.851.783.851a.274.274 0 00.061-.006c.276-.063 7.867-2.344 9.312-2.779a.98.98 0 00.414-.249l15.887-15.888a1.374 1.374 0 00.4-.883 1.222 1.222 0 00-.346-.949zm-23.9 18.142l2.009-6.73 4.72 4.708c-2.155.649-4.861 1.465-6.728 2.022z"/>
    </svg>