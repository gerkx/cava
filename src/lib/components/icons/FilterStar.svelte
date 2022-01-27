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
        <path d="M20.3 36c0-4.157 1.449-7.322 4.265-10.735S39.621 6.388 39.621 6.388A1.464 1.464 0 0038.486 4H1.529A1.464 1.464 0 00.393 6.388l15.686 19.671v18.417a1.464 1.464 0 002.46 1.073l3.256-2.886A14.465 14.465 0 0120.3 36z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm.221 4.052l2 5.29 5.649.267a.236.236 0 01.136.42l-4.413 3.537 1.491 5.455a.236.236 0 01-.357.259L36 40.277l-4.728 3.1a.236.236 0 01-.357-.259l1.491-5.455-4.412-3.533a.236.236 0 01.136-.42l5.649-.267 2-5.29a.236.236 0 01.442-.001z"/>
    </svg>