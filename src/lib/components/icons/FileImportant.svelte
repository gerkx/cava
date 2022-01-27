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
        <path d="M28 4v12h12L28 4z"/>
<path d="M26 20a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zm-11.979-1.781a.425.425 0 01.2-.438A6.909 6.909 0 0116.6 17.3a7.791 7.791 0 012.425.358.5.5 0 01.239.437v2.863a91.452 91.452 0 01-.795 9.232c0 .12-.038.237-.277.237h-3.176a.261.261 0 01-.277-.237c-.081-1.114-.717-5.774-.717-9.113zM16.6 40a3.085 3.085 0 01-3.392-3.159 3.207 3.207 0 013.392-3.252 3.158 3.158 0 013.4 3.252A3.085 3.085 0 0116.6 40z"/>
    </svg>