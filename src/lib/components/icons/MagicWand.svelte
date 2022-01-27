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
        <path d="M41.229 18.944l.1 2.873a2.341 2.341 0 001.2 1.958l2.508 1.405-2.873.1a2.342 2.342 0 00-1.959 1.2l-1.4 2.507-.1-2.872a2.344 2.344 0 00-1.2-1.959l-2.508-1.4 2.873-.1a2.343 2.343 0 001.958-1.2zM38.812.077l.144 3.984a3.247 3.247 0 001.659 2.717l3.478 1.948-3.984.144a3.249 3.249 0 00-2.717 1.659l-1.948 3.478-.144-3.984a3.249 3.249 0 00-1.659-2.717l-3.479-1.948 3.985-.144a3.248 3.248 0 002.716-1.659zM16.168 3.115l.185 5.131a4.186 4.186 0 002.137 3.5l4.479 2.509-5.131.186a4.182 4.182 0 00-3.5 2.136l-2.509 4.48-.185-5.132a4.183 4.183 0 00-2.137-3.5L5.029 9.916l5.131-.185a4.186 4.186 0 003.5-2.137z"/>
<rect height="39.934" rx="2" ry="2" transform="rotate(45 17.881 30.12)" width="6" x="14.881" y="10.152"/>
    </svg>