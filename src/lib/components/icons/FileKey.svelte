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
<circle cx="29.571" cy="35.376" r="2.543"/>
<path d="M26 20a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zm8.184 14.393a6.013 6.013 0 01-11.945.49 6.166 6.166 0 01.066-2.15l-2.905-3v-2.681h-3.238a.464.464 0 01-.463-.462v-3.237h-3.236a.464.464 0 01-.463-.462v-4.624a.464.464 0 01.463-.462h2.119a.475.475 0 01.327.135l10.644 10.642a5.948 5.948 0 012.743-.605 6.1 6.1 0 015.888 6.416z"/>
    </svg>