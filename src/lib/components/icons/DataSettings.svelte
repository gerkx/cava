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
        <ellipse cx="24" cy="10.25" rx="20" ry="6.25"/>
<path d="M20 36a15.949 15.949 0 01.517-3.971C14.211 31.608 5.862 30.105 4 27.152v10.6c0 3.255 7.968 5.927 18.14 6.221A15.917 15.917 0 0120 36zm16-16a15.909 15.909 0 017.972 2.141c0-.058.028-.115.028-.173V15.5c-3.059 3.868-13.83 5-20 5s-17.765-1.461-20-5v6.471c0 3.245 7.917 5.911 18.044 6.219A15.988 15.988 0 0136 20z"/>
<path d="M47.146 34.349h-2.891a8.364 8.364 0 00-1.221-2.964l2.059-2.058a.827.827 0 000-1.168l-1.251-1.251a.827.827 0 00-1.168 0l-2.058 2.059a8.371 8.371 0 00-2.964-1.221v-2.892a.826.826 0 00-.826-.826h-1.652a.826.826 0 00-.826.826v2.891a8.371 8.371 0 00-2.964 1.221l-2.058-2.059a.827.827 0 00-1.168 0l-1.251 1.251a.827.827 0 000 1.168l2.059 2.058a8.364 8.364 0 00-1.221 2.964h-2.891a.826.826 0 00-.826.826v1.651a.826.826 0 00.826.826h2.891a8.364 8.364 0 001.221 2.964l-2.059 2.058a.826.826 0 000 1.167l1.251 1.251a.827.827 0 001.168 0l2.058-2.058a8.371 8.371 0 002.964 1.221v2.891a.826.826 0 00.826.826h1.651a.826.826 0 00.826-.826v-2.89a8.371 8.371 0 002.964-1.221l2.058 2.058a.827.827 0 001.168 0l1.251-1.251a.826.826 0 000-1.167l-2.059-2.058a8.364 8.364 0 001.221-2.964h2.891a.826.826 0 00.826-.826v-1.652a.827.827 0 00-.825-.825zM36 39.223A3.223 3.223 0 1139.223 36 3.223 3.223 0 0136 39.223z"/>
    </svg>