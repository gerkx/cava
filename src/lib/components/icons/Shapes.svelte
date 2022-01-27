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
        <path d="M25.224 40.451a14.112 14.112 0 01-9.108-10.413l-.035-.156H4.323a.614.614 0 01-.539-.313.6.6 0 010-.617L16.438 6.806a.62.62 0 011.076 0l4.717 8.258.178-.114a13.421 13.421 0 013.614-1.663 14.283 14.283 0 11-.8 27.166zM19.18 30.136a11.3 11.3 0 104.676-12.615l-.158.1 6.472 11.33a.621.621 0 01-.537.928H19.106z"/>
    </svg>