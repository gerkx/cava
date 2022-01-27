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
        <path d="M45.818 4H2.182A2.1 2.1 0 000 6v1.387l23.685 17.368a.54.54 0 00.633 0L48 7.387V6a2.1 2.1 0 00-2.182-2zM0 12.161v16.928l13.172-7.27L0 12.161zm21.145 15.506L16.56 24.3 0 33.437V36a2.1 2.1 0 002.182 2h17.956A16.091 16.091 0 0120 36a15.909 15.909 0 012.079-7.869 4.4 4.4 0 01-.934-.464zM48 25.441v-13.28l-10.773 7.9A15.941 15.941 0 0148 25.441zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM27.075 36a8.884 8.884 0 011.65-5.171l12.446 12.446A8.926 8.926 0 0127.075 36zm16.2 5.172L30.829 28.725a8.926 8.926 0 0112.446 12.447z"/>
    </svg>