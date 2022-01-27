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
        <path d="M33.965 18.685a11.975 11.975 0 00-15.28 15.28 15.975 15.975 0 0015.28-15.28z"/>
<path d="M14 30a15.959 15.959 0 0119.583-15.583 15.994 15.994 0 10-19.166 19.166A16.017 16.017 0 0114 30z"/>
<path d="M33.583 14.417A16.017 16.017 0 0134 18c0 .231-.025.456-.035.685a11.994 11.994 0 11-15.28 15.28c-.229.01-.453.035-.685.035a16.017 16.017 0 01-3.583-.417 15.994 15.994 0 1019.166-19.166z"/>
    </svg>