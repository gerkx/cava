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
        <path d="M40 4H8a4 4 0 00-4 4v32a4 4 0 004 4h32a4 4 0 004-4V8a4 4 0 00-4-4zM24 40a16 16 0 1116-16 16 16 0 01-16 16z"/>
<path d="M32.705 31.723c-2.052-5.658-4.27-12.01-6.295-17.584a.208.208 0 00-.222-.139h-4.465a.175.175 0 00-.2.194 4.937 4.937 0 01-.277 1.72c-1.747 4.8-4.105 11.621-5.575 15.781-.055.194 0 .3.222.3h3.328a.3.3 0 00.333-.25L20.8 28h6.433l1.367 3.806a.249.249 0 00.277.194h3.661c.195 0 .251-.083.167-.277zm-8.764-14.45h.028c.554 2 1.789 5.5 2.343 7.383h-4.656c.721-2.246 1.869-5.497 2.285-7.383z"/>
    </svg>