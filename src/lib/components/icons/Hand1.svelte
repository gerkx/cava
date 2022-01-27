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
        <path d="M35.715 25.893c-.639-.361-1.318-3.3-3.909-3.3a1.515 1.515 0 01-.7-.084c-.161-.1-.578-3-3.412-3a8.742 8.742 0 01-1.925-.139 3.817 3.817 0 00-3.259-2.152c-.269 0-1.606.3-1.647.3-1.458 0-1.926-1.447-4.2-.912C14.1 17.217 14 20.317 14 21.959a15.112 15.112 0 01-.268 2.949 2.134 2.134 0 01-1.085 1.524c-.556.317-4.921-3.175-4.921-3.175-2.857-1.945-4.619-1.272-5.357-.4-.786.931-.238 2.46.9 3.638l7.319 8.313C12.483 37.1 18.41 44 23.994 44c5.477 0 9.975-2.6 11.42-6 .982-2.845 1.8-5.961 2.107-7.336a4.3 4.3 0 00-1.806-4.771z"/>
    </svg>