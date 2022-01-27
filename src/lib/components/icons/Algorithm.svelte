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
        <path d="M41.524 31.857a5.475 5.475 0 00-1.308.164l-3.54-6.195a5.466 5.466 0 00-5.222-9.138l-3.54-6.195a5.476 5.476 0 10-7.828 0l-3.54 6.195a5.47 5.47 0 00-5.222 9.138l-3.54 6.2a5.474 5.474 0 103.955 6.812h7a5.471 5.471 0 0010.526 0h7a5.474 5.474 0 105.263-6.976zm-31.134 1.65l3.54-6.195a5.3 5.3 0 002.632 0l3.52 6.2a5.466 5.466 0 00-1.345 2.322h-7a5.455 5.455 0 00-1.347-2.327zM24 12.143a5.475 5.475 0 001.308-.164l3.54 6.2a5.465 5.465 0 00-1.348 2.32l-7-.007a5.467 5.467 0 00-1.346-2.313l3.54-6.195a5.475 5.475 0 001.306.159zm1.288 19.873a5.3 5.3 0 00-2.6.006l-3.523-6.209a5.472 5.472 0 001.341-2.326l6.992.007a5.467 5.467 0 001.3 2.273zm2.612 1.475l3.478-6.2a5.312 5.312 0 002.692.019l3.54 6.195a5.455 5.455 0 00-1.349 2.326h-7a5.474 5.474 0 00-1.361-2.34z"/>
    </svg>