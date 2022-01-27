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
        <path d="M36 24a12 12 0 1012 12 12 12 0 00-12-12zm6 14.48a.594.594 0 01-1.015.42l-2.528-2.529-5.336 5.336a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l5.336-5.336-2.529-2.528A.594.594 0 0133.52 30h8.126a.354.354 0 01.354.354z"/>
<path d="M20 36a15.923 15.923 0 013.52-10H15a1 1 0 01-1-1v-2a1 1 0 011-1h13.26A15.92 15.92 0 0136 20a16.085 16.085 0 012 .138V17a1 1 0 011-1h2a1 1 0 011 1v4.174a15.891 15.891 0 012 .984V6a2 2 0 00-2-2H6a2 2 0 00-2 2v36a2 2 0 002 2h16.158A15.905 15.905 0 0120 36zM38 7a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1zM10 41a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h2a1 1 0 011 1z"/>
    </svg>