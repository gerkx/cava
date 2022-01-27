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
        <path d="M27.3 28.067a36 36 0 01-.959-6.33 12.009 12.009 0 01.761-3.6c2.969-1.061 4.52-3.8 4.52-7.026A7.5 7.5 0 0024 3.612a7.479 7.479 0 00-7.6 7.5c0 3.219 1.534 5.957 4.5 7.021a12.6 12.6 0 01.775 3.6 37.657 37.657 0 01-.968 6.33c-4.447.222-11.794 2.187-14.8 3.229A2.81 2.81 0 004 33.948v3.039a1 1 0 001 1h38a1 1 0 001-1v-3.038a2.81 2.81 0 00-1.9-2.649c-3.012-1.047-10.354-3.012-14.8-3.233z"/>
<rect height="4" rx="1" ry="1" width="36" x="6" y="40"/>
    </svg>