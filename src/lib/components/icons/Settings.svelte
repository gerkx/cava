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
        <path d="M42 20.7h-2.993a.487.487 0 01-.472-.374 14.85 14.85 0 00-1.664-4 .485.485 0 01.071-.6l2.119-2.119a2 2 0 000-2.829l-1.838-1.84a2 2 0 00-2.828 0l-2.12 2.12a.485.485 0 01-.6.07 14.86 14.86 0 00-4-1.663.487.487 0 01-.374-.471V6a2 2 0 00-2-2H22.7a2 2 0 00-2 2v2.994a.487.487 0 01-.374.471 14.86 14.86 0 00-4 1.663.485.485 0 01-.6-.07l-2.12-2.12a2 2 0 00-2.828 0l-1.839 1.839a2 2 0 000 2.829l2.119 2.119a.485.485 0 01.071.6 14.85 14.85 0 00-1.664 4 .487.487 0 01-.472.374H6a2 2 0 00-2 2v2.6a2 2 0 002 2h2.993a.487.487 0 01.472.373 14.843 14.843 0 001.664 4.005.485.485 0 01-.071.6l-2.119 2.117a2 2 0 000 2.829l1.838 1.838a2 2 0 002.829 0l2.119-2.119a.485.485 0 01.6-.071 14.85 14.85 0 004 1.664.487.487 0 01.374.471V42a2 2 0 002 2h2.6a2 2 0 002-2v-2.994a.487.487 0 01.374-.471 14.85 14.85 0 004-1.664.485.485 0 01.6.071l2.119 2.119a2 2 0 002.829 0l1.838-1.838a2 2 0 000-2.829l-2.119-2.119a.485.485 0 01-.071-.6 14.843 14.843 0 001.664-4.005.487.487 0 01.472-.373H42a2 2 0 002-2V22.7a2 2 0 00-2-2zM24 31.5a7.5 7.5 0 117.5-7.5 7.5 7.5 0 01-7.5 7.5z"/>
    </svg>