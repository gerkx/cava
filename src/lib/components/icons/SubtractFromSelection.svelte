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
        <path d="M11.321 33.7l-3.592 2.075a20.194 20.194 0 004.5 4.5l2.071-3.596a16.043 16.043 0 01-2.979-2.979zm25.358 0a16.043 16.043 0 01-2.979 2.979l2.074 3.593a20.194 20.194 0 004.5-4.5zm-6.541 5.055a15.882 15.882 0 01-4.076 1.078V44a19.947 19.947 0 006.146-1.659zm9.695-12.693a15.882 15.882 0 01-1.078 4.076l3.586 2.07A19.947 19.947 0 0044 26.062zM9.245 30.138a15.882 15.882 0 01-1.078-4.076H4a19.947 19.947 0 001.659 6.146zm12.693 9.695a15.882 15.882 0 01-4.076-1.078l-2.07 3.586A19.947 19.947 0 0021.938 44zM11.321 14.3l-3.592-2.075a20.194 20.194 0 014.5-4.5l2.071 3.596a16.043 16.043 0 00-2.979 2.979zm25.358 0a16.043 16.043 0 00-2.979-2.979l2.074-3.593a20.194 20.194 0 014.5 4.5zm-6.541-5.055a15.882 15.882 0 00-4.076-1.078V4a19.947 19.947 0 016.146 1.659zm9.695 12.693a15.882 15.882 0 00-1.078-4.076l3.586-2.07A19.947 19.947 0 0144 21.938zM9.245 17.862a15.882 15.882 0 00-1.078 4.076H4a19.947 19.947 0 011.659-6.146zm12.693-9.695a15.882 15.882 0 00-4.076 1.078l-2.07-3.586A19.947 19.947 0 0121.938 4zM34 25a1 1 0 01-1 1H15a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1z"/>
    </svg>