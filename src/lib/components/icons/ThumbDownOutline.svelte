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
        <path d="M46.921 25.076l-4.405-12.882A7.676 7.676 0 0035.251 7H16a2 2 0 00-2-2H6a2 2 0 00-2 2v25a2 2 0 002 2h8a2 2 0 002-2v-1.812c2.859.929 7.113 3.654 8.96 11.625A5.956 5.956 0 0030.5 46.2a5.033 5.033 0 005.085-4.839 49.267 49.267 0 00-1.1-9.361l8.163-.008a5.147 5.147 0 003.987-2.527 4.837 4.837 0 00.286-4.389zm-3.741 2.373a1.139 1.139 0 01-.819.551H29.105l.86 2.623a41.865 41.865 0 011.62 10.738 1.1 1.1 0 01-1.085.839 1.988 1.988 0 01-1.644-1.29c-2.625-11.327-9.827-14.164-12.8-14.858L16 26.039V11h19.251a3.677 3.677 0 013.48 2.488l4.5 13.143a.863.863 0 01-.051.818z"/>
    </svg>