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
        <path d="M43.953 14.125l-10.1-10.1a2 2 0 00-2.829 0l-5.39 5.397L14.1 14.963l-.179.09a4.487 4.487 0 00-2 2.3l-8.262 20.71a2 2 0 00.435 2.147l3.64 3.69a2 2 0 002.162.452l20.681-8.231a4.726 4.726 0 002.471-2.221l5.579-11.619 5.326-5.326a2 2 0 000-2.83zM29.84 32.266a1.077 1.077 0 01-.579.5L9.333 41.055l-.507-.5 9.931-9.932a3.21 3.21 0 10-1.414-1.414L7.4 39.147l-.471-.465 8.345-20.03a.919.919 0 01.377-.443L27.96 12.3l7.751 7.75z"/>
    </svg>