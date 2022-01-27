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
        <path d="M43.441 11.6a.785.785 0 00-.519-.316L33.91 9.778a.5.5 0 00-.573.413l-1.4 8.995a.78.78 0 00.135.593.8.8 0 001.121.186l3.4-2.448A13.923 13.923 0 0134.646 31.6a1.012 1.012 0 00.081 1.383l1.467 1.357a1 1 0 001.443-.079 17.9 17.9 0 002.272-19.127l3.352-2.412a.8.8 0 00.18-1.122zM22.552 31.956a.786.786 0 00-.577-.19.8.8 0 00-.739.863l.324 4.057a13.794 13.794 0 01-10.955-8.877 1 1 0 00-1.214-.633l-1.92.563a1 1 0 00-.671 1.287 17.838 17.838 0 0015.093 11.74l.337 4.221a.8.8 0 00.868.734.783.783 0 00.539-.28l5.954-6.932a.5.5 0 00-.057-.7zm4.263-26.8A17.963 17.963 0 009.377 12.1l-3.853-2.021a.8.8 0 00-1.084.342.781.781 0 00-.05.606l2.693 8.732a.5.5 0 00.627.328l8.665-2.787a.779.779 0 00.469-.387.8.8 0 00-.336-1.085l-3.56-1.863A13.99 13.99 0 0125.97 9.069a1 1 0 001.157-.736l.473-1.942a1.011 1.011 0 00-.785-1.235z"/>
    </svg>