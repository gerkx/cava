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
        <path d="M32.1 24.1A11.9 11.9 0 1044 36a11.9 11.9 0 00-11.9-11.9zM41.025 36a8.865 8.865 0 01-1.663 5.159l-12.42-12.421A8.9 8.9 0 0141.025 36zm-17.85 0a8.862 8.862 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0123.175 36zm-6.975.1A15.774 15.774 0 0122 23.746V7.155a.931.931 0 00-1.542-.761l-9.8 9.154a2.018 2.018 0 01-1.284.46L2 16.013A1.994 1.994 0 000 18v12.013A1.994 1.994 0 002 32h7.375a2 2 0 011.28.455l5.634 5.313A15.865 15.865 0 0116.2 36.1z"/>
    </svg>