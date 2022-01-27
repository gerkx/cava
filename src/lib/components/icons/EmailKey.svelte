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
        <path d="M13.172 23.819L0 14.161v16.928l13.172-7.27zM34 34.508a11.192 11.192 0 01-5.395-6.124l-1.748 1.282a5.012 5.012 0 01-5.713 0L16.56 26.3 0 35.437V38a2.1 2.1 0 002.182 2H34zM40 14a13.1 13.1 0 011.567.1L48 9.387V8a2.1 2.1 0 00-2.182-2H2.182A2.1 2.1 0 000 8v1.387l23.685 17.368a.54.54 0 00.633 0l3.737-2.741C28.6 18.409 33.746 14 40 14zm8 2.824v-2.663l-1.892 1.387A12.077 12.077 0 0148 16.824z"/>
<path d="M48 25c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 3.258 2.556 5.972 6 6.752V47a1 1 0 001 1h6.5a.5.5 0 00.5-.5v-3.638a.5.5 0 00-.5-.5H42V42h3.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H42v-6.248c3.444-.78 6-3.494 6-6.752zm-8 .774a2.4 2.4 0 112.4-2.4 2.4 2.4 0 01-2.4 2.4z"/>
    </svg>