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
        <path d="M18 30V11a1 1 0 00-1-1h-2a1 1 0 00-1 1v3h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v15a1 1 0 001 1h15v3a1 1 0 001 1h2a1 1 0 001-1v-3h3a1 1 0 001-1v-2a1 1 0 00-1-1zM38 4.5h-1V.8a.8.8 0 00-.806-.8.781.781 0 00-.559.236L30.11 5.687a.5.5 0 000 .626l5.524 5.451a.785.785 0 00.56.236.8.8 0 00.806-.8V7.5h1a6 6 0 016 6v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-.5a9 9 0 00-9-9zM17.89 41.687l-5.524-5.451a.785.785 0 00-.56-.236.8.8 0 00-.806.8v3.7h-1a6 6 0 01-6-6V34a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v.5a9 9 0 009 9h1v3.7a.8.8 0 00.806.8.781.781 0 00.559-.236l5.525-5.451a.5.5 0 000-.626z"/>
<path d="M30 18H20v-4h13a1 1 0 011 1v13h-4z"/>
    </svg>