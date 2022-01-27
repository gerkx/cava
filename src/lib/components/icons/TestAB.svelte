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
        <path d="M6.425 28.148l-1.744 5.234a.314.314 0 01-.349.254H1.16c-.19 0-.254-.1-.222-.317l6.534-18.588a4.851 4.851 0 00.285-1.713c0-.127.063-.222.19-.222h4.409c.159 0 .19.032.222.19l7.327 20.365c.032.19 0 .285-.19.285h-3.551a.318.318 0 01-.317-.19l-1.84-5.3zm6.566-3.458c-.666-2.093-2.157-6.5-2.791-8.723h-.032c-.507 2.126-1.776 5.833-2.728 8.724zM23.4 34.841c-.032.127-.1.159-.222.159h-2.635c-.159 0-.19-.063-.159-.19l6.249-23.251c.032-.127.063-.127.19-.127h2.664c.127 0 .159.032.127.159zM32 13.113c0-.159.032-.254.19-.286 1.142-.032 4.028-.1 6.154-.1 6.63 0 7.645 3.489 7.645 5.519a4.952 4.952 0 01-2 4.124 5.315 5.315 0 013.045 4.917c0 4-3.458 6.407-8.691 6.407-2.76 0-4.917-.032-6.122-.063a.241.241 0 01-.221-.249zm3.775 7.993h2.411a19.531 19.531 0 012.886.19 3 3 0 001.205-2.506c0-1.871-1.4-2.791-4-2.791-1.015 0-1.84.032-2.506.032zm0 9.326c.7.032 1.491.064 2.442.064 2.982.032 4.885-.983 4.885-3.109a2.663 2.663 0 00-2.284-2.76 8.346 8.346 0 00-2.157-.222h-2.886z"/>
    </svg>