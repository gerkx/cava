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
        <path d="M20.44 40H8V8h32v10.681c.06 0 .117-.021.178-.023l.306-.009.241.029A5.138 5.138 0 0144 20.159V6a2 2 0 00-2-2H6a2 2 0 00-2 2v36a2 2 0 002 2h13.246z"/>
<path d="M46.986 28.793l-5.765-5.765a1.111 1.111 0 00-.816-.36c-.013 0-.1-.012-.11-.012a1.35 1.35 0 00-.906.426L25.705 36.767a.986.986 0 00-.251.421l-2.778 9.305c-.114.377.459.851.783.851a.293.293 0 00.061-.006c.277-.064 7.867-2.345 9.312-2.779a.984.984 0 00.414-.249l13.686-13.685a1.375 1.375 0 00.4-.884 1.221 1.221 0 00-.346-.948zm-21.7 15.94L27.3 38l4.72 4.708c-2.163.651-4.864 1.467-6.731 2.025z"/>
    </svg>