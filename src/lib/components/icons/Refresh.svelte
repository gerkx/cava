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
        <path d="M39.142 28a1.007 1.007 0 00-.944.686 13.981 13.981 0 01-22.353 5.883l4.862-4.862a.978.978 0 00.295-.7A1 1 0 0020 28H6.5a.5.5 0 00-.5.5V42a1 1 0 001.007 1 .978.978 0 00.7-.3l3.893-3.886a19.972 19.972 0 0032.758-9.77.847.847 0 00-.829-1.044zM25 10a13.9 13.9 0 019.156 3.432l-4.861 4.861a.978.978 0 00-.295.7A1 1 0 0030 20h13.5a.5.5 0 00.5-.5V6a1 1 0 00-1.007-1 .978.978 0 00-.7.295l-3.9 3.9a19.968 19.968 0 00-32.752 9.761.847.847 0 00.83 1.044h4.387a1.007 1.007 0 00.944-.686A14.007 14.007 0 0125 10z"/>
    </svg>