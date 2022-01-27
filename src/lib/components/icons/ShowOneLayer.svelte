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
        <path d="M43.842 35.724L32.8 30.151l11.044-5.533a.5.5 0 000-.894l-11.087-5.553 11.085-5.553a.5.5 0 000-.894L24.448 2.008a1 1 0 00-.9 0l-19.39 9.716a.5.5 0 000 .894l11.085 5.553-11.085 5.553a.5.5 0 000 .894l11.031 5.526-11.031 5.58a.5.5 0 000 .894l19.394 9.716a1 1 0 00.9 0l19.394-9.716a.5.5 0 00-.004-.894zm-24.58-19.566L11.3 12.171 24 5.81l12.7 6.361-7.959 3.987-4.29-2.15a1 1 0 00-.9 0l-4.29 2.15zM24 42.532l-12.7-6.361 7.907-4.012 4.342 2.175a1 1 0 00.9 0l4.328-2.169 7.923 4.006z"/>
    </svg>