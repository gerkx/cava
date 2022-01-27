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
        <path d="M4 6.322v36.859a2 2 0 002.661 1.888l36-12.6A2 2 0 0044 30.581V11.722a2 2 0 00-1.7-1.977l-36-5.4A2 2 0 004 6.322zm36 13l-6 .626v-7.403l6 .9zM22 21.2V10.745l8 1.2v8.424zm8 3.187v8.271l-8 2.8V25.226zM18 10.145v11.477L8 22.665V8.645zM8 26.687l10-1.044v11.219l-10 3.5zm26 4.575v-7.288l6-.627v5.815z"/>
    </svg>