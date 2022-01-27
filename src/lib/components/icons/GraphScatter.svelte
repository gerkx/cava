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
        <circle cx="24.8" cy="20.496" r="2.975"/>
<circle cx="22.096" cy="9.679" r="2.975"/>
<circle cx="41.025" cy="6.975" r="2.975"/>
<circle cx="27.504" cy="25.904" r="2.975"/>
<circle cx="35.617" cy="20.496" r="2.975"/>
<circle cx="16.688" cy="25.904" r="2.975"/>
<circle cx="16.688" cy="12.383" r="2.975"/>
<circle cx="22.096" cy="36.721" r="2.975"/>
<circle cx="8.574" cy="39.425" r="2.975"/>
    </svg>