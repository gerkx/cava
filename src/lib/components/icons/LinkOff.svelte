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
        <path d="M14.848 12.698l-1.994 1.919-7.105-6.986 1.995-1.92 7.104 6.987zm27.553 27.671l-1.994 1.92-7.066-7.113 1.994-1.919 7.066 7.112zM14.743 2.4h3.086v6.171h-3.086zM2.4 14.743h6.171v3.086H2.4zm37.029 15.428H45.6v3.086h-6.171zm-9.258 9.258h3.086V45.6h-3.086zM42.1 5.9a10.913 10.913 0 00-15.434 0c-.408.408-4.428 4.4-6.546 6.5l3.312 3.312a8392.05 8392.05 0 006.541-6.5 6.236 6.236 0 118.819 8.819l-6.521 6.521 3.307 3.307 6.522-6.521a10.913 10.913 0 000-15.438zM24.529 32.243c-2.152 2.173-6.3 6.349-6.5 6.545a6.236 6.236 0 01-8.819-8.819l6.521-6.522-3.305-3.307-6.521 6.522A10.913 10.913 0 1021.339 42.1c.418-.419 4.4-4.439 6.492-6.551z"/>
    </svg>