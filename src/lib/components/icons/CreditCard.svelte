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
        <path d="M4 42a2 2 0 002 2h36a2 2 0 002-2v-4H4zm37.729-18.13c-3.147 1.574-14.1 6.66-14.5 6.849a8.625 8.625 0 01-3.558.812 6.3 6.3 0 01-5.884-3.791A7.086 7.086 0 0119.346 20H6a2 2 0 00-2 2v12h40V22.263a11.1 11.1 0 01-2.271 1.607z"/>
<path d="M16.768 16s.355-1.633 1.062-4.215c.483-1.761 6.685-9.481 9.06-10.273C29.234.73 42.376.167 42.376.167L47.9 10.2s-4.832 8.525-7.964 10.091-14.458 6.826-14.458 6.826-2.949 1.427-4.053-1.023c-.84-1.862 1.059-3.579 1.059-3.579s4.326-3 6-4.317c1.216-.959 2.5-2.867.788-4.581s-3.462-.017-4.371.771S23.1 16 23.1 16z"/>
    </svg>