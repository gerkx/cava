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
        <path d="M11.387 2h16.078a1 1 0 01.835 1.555L18.667 18h11.14a1 1 0 01.755 1.656L6.189 47.734a.5.5 0 01-.846-.5L13.333 26H4.054a1 1 0 01-.949-1.316l7.334-22A1 1 0 0111.387 2zm26.689 22.224c-.035-.18-.072-.216-.252-.216h-5.006c-.142 0-.215.108-.215.252a5.487 5.487 0 01-.324 1.945l-7.418 21.1c-.037.252.035.36.252.36h3.6a.354.354 0 00.394-.288L30.9 42h8.991l1.892 5.451a.364.364 0 00.361.216h4.036c.214 0 .252-.108.214-.324zm-2.736 3.385h.035c.721 2.521 2.564 8.07 3.319 10.447h-6.666c1.082-3.277 2.736-8.035 3.312-10.447z"/>
    </svg>