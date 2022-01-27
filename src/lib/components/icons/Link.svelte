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
        <path d="M42.357 5.643a11.07 11.07 0 00-15.657 0c-.594.594-3.806 3.741-5.483 5.418a12.808 12.808 0 015.774.939c.8-.8 2.733-2.668 3.064-3A6.326 6.326 0 1139 17.945l-8.2 8.2c-2.471 2.471-6.905 2.76-9.376.29a6.418 6.418 0 01-1.915-2.508 3.151 3.151 0 00-.659.49l-2.523 2.642a11 11 0 001.892 2.581c4.324 4.323 12.149 3.648 16.472-.676l7.666-7.664a11.07 11.07 0 000-15.657z"/>
<path d="M20.8 36.072c-.8.8-2.524 2.6-2.855 2.93A6.326 6.326 0 019 30.055l8.214-8.214c2.471-2.471 6.855-2.75 9.325-.279a6.069 6.069 0 011.706 2.577 3.125 3.125 0 00.659-.49l2.677-2.655a10.983 10.983 0 00-1.893-2.581 11.279 11.279 0 00-15.829.073L5.643 26.7A11.071 11.071 0 0021.3 42.357c.594-.594 3.6-3.672 5.274-5.348a12.825 12.825 0 01-5.774-.937z"/>
    </svg>