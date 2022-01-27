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
        <path d="M36.968 15.169a6.25 6.25 0 00-1.394-.056L24.529 5.194a9.116 9.116 0 001.278 6.139c1.069 1.671 4.157 3.57 6.657 4.913a4.2 4.2 0 00-1.624 2.623 4.047 4.047 0 00.13 1.85c-1.457-1.673-4.336-4.5-7.834-5.459-7.2-1.97-9.9-.874-11.821-.666a3.684 3.684 0 10-2.892 1.878l-.374.915c-3.767 7.78 1.42 11.906 4.559 13.676 1.11.625 4.674 2.032 4.674 2.032l-4.774 3.457a2.449 2.449 0 00-.753 3.2s4.256-2.561 8.712-5.275L26.5 37.1A2.835 2.835 0 0030 36l-6.313-3.488c2.426-1.489 4.608-2.843 5.822-3.633a10.8 10.8 0 004.42-5.027 6.194 6.194 0 001.537.481c2.969.487 7.35-.9 7.765-3.432s-3.293-5.246-6.263-5.732zM20.511 30.758l-3.966-2.191a9.131 9.131 0 002.24-3.775 69.495 69.495 0 006.319 2.64z"/>
    </svg>