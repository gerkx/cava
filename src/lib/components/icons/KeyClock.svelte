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
        <path d="M36.1 24.084a11.9 11.9 0 1011.9 11.9 11.9 11.9 0 00-11.9-11.9zM36 44.736a8.752 8.752 0 118.752-8.752A8.752 8.752 0 0136 44.736z"/>
<path d="M37.526 35.979v-5.22a1.652 1.652 0 00-1.652-1.652 1.652 1.652 0 00-1.652 1.652V37.8l4.134 2.613a1.652 1.652 0 002.28-.513 1.652 1.652 0 00-.513-2.28zm-14.873-9.486l8.916-8.972 2.241 2.241a15.641 15.641 0 016.48.424l2.139-2.138-5.693-5.693 1.641-1.642 5.693 5.694 3.293-3.293a1 1 0 000-1.415l-8.617-8.617a2 2 0 00-2.829 0L17.606 21.394a12 12 0 102.677 19.274c-1.313-4.433-.858-10.946 2.37-14.175zM10 38a4 4 0 114-4 4 4 0 01-4 4z"/>
    </svg>