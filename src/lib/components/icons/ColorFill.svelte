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
        <path d="M46.141 31.932a66.859 66.859 0 00-2.054-8.969c-.506-3.182-3.937-4.02-7.2-4.462L24.414 6.03a2 2 0 00-2.828 0l-4.364 4.364 6.192 6.192a2 2 0 11-2.828 2.829l-6.193-6.193L2.029 25.587a2 2 0 000 2.828l15.557 15.556a2 2 0 002.828 0l19.557-19.556a1.976 1.976 0 00.478-1.964 1.817 1.817 0 01-.137-.325.564.564 0 01.745.3c.67 1.267 1.224 3.8-.418 7.544-.509 1.16-1.873 2.9-1.873 4.391 0 2.325 1.227 3.775 3.748 3.775 2.215.003 4.04-2.074 3.627-6.204z"/>
<path d="M10.681 3.853a2 2 0 00-2.829 2.828l6.541 6.541 2.829-2.828z"/>
    </svg>