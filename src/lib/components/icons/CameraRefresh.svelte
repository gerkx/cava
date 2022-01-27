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
        <path d="M20.21 34a17.441 17.441 0 01.519-2.185 11.3 11.3 0 1114.522-11.779c.25-.012.5-.036.749-.036a15.3 15.3 0 018.284 2.418L46 20.665V10a2 2 0 00-2-2h-6.75a2 2 0 01-1.664-.891l-4.993-4.218A2 2 0 0028.929 2H19.07a2 2 0 00-1.664.891l-4.867 4.218A2 2 0 0110.875 8H4a2 2 0 00-2 2v26a2 2 0 002 2h16.02c.052-2.526.19-4 .19-4zm24.675 2A9.109 9.109 0 0136 44.508a8.114 8.114 0 01-6.17-2.667L33.663 38H24.1v9.583l3.446-3.453A11.545 11.545 0 0036 47.9c6.327 0 11.483-5.256 11.9-11.9z"/>
<path d="M42.267 30.189L38.535 34H47.9v-9.563l-3.4 3.477A11.469 11.469 0 0036 24.1c-6.327 0-11.483 5.256-11.9 11.9h3.015A9.109 9.109 0 0136 27.491a8.691 8.691 0 016.267 2.698zm-11.281-9.323a6.994 6.994 0 10-8.486 6.963 16.268 16.268 0 018.486-6.963z"/>
    </svg>