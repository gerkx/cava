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
        <path d="M43.635 32.328L31.6 24l12.036-8.328a.8.8 0 000-1.344L24.652 1.193a1.2 1.2 0 00-1.3 0L4.365 14.328a.8.8 0 000 1.344L16.4 24 4.365 32.328a.8.8 0 000 1.344l18.983 13.135a1.2 1.2 0 001.3 0l18.987-13.135a.8.8 0 000-1.344zm-12.871 1.038l-6.386 6.488a.5.5 0 01-.707 0l-6.435-6.488a.785.785 0 01-.236-.56.8.8 0 01.8-.806H22v-8.97L11 15l13-9.513L37 15l-11 8.03V32h4.2a.8.8 0 01.8.806.785.785 0 01-.236.56z"/>
    </svg>