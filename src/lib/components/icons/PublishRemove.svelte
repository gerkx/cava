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
        <path d="M44.194 4.424L2 17a1.065 1.065 0 00-.191 1.978l9.669 4.834zM20.312 33.627L12.066 29v10.185a.95.95 0 001.564.725l6.57-5.531c.025-.254.072-.502.112-.752zM36 20.2a15.863 15.863 0 014.125.56l7.33-14.669-31.377 19.951 5.74 2.895A15.887 15.887 0 0136 20.2z"/>
<path d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8.132 17.2a.5.5 0 010 .707l-2.122 2.125a.5.5 0 01-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 01-.707 0l-2.128-2.122a.5.5 0 010-.707l5.3-5.3-5.3-5.3a.5.5 0 010-.707l2.122-2.121a.5.5 0 01.707 0l5.3 5.3 5.3-5.3a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-5.3 5.3z"/>
    </svg>