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
        <path d="M8.215 23.155L6.16 29.683a.374.374 0 01-.411.317H2.014c-.225 0-.3-.119-.261-.395L9.447 6.414a6.4 6.4 0 00.337-2.135c0-.16.074-.279.224-.279H15.2c.188 0 .224.039.262.237l8.628 25.407c.038.237 0 .356-.224.356h-4.184a.373.373 0 01-.373-.237l-2.167-6.608zm7.732-4.315c-.784-2.612-2.541-8.111-3.288-10.881h-.037c-.6 2.651-2.092 7.281-3.212 10.881zM25.634 44c-.15 0-.3-.039-.3-.317v-2.652a.875.875 0 01.112-.474l12.963-18.283H25.9c-.188 0-.3-.039-.262-.276l.56-3.681c.038-.237.15-.317.336-.317H43.9c.185 0 .224.08.224.237v2.85a.835.835 0 01-.188.555L31.2 39.688h13.373c.185 0 .26.118.185.356l-.6 3.639c-.036.237-.112.317-.335.317z"/>
    </svg>