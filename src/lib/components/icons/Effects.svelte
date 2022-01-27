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
        <path d="M46.045 16H41.64c-.27 0-.324.1-.484.314l-8.89 8.823v-.06l-3.685-8.868c-.054-.157-.108-.209-.322-.209H16.048l.827-3.583c1.56-7.061 4.8-8.069 7.361-8.069a23.88 23.88 0 014 1c.186.061.311-.061.374-.3l.81-3.531c.063-.183-.061-.364-.249-.486a21.23 21.23 0 00-4.86-.679c-6.053 0-10.42 3.183-12.48 12.374L11.005 16H4.986a.34.34 0 00-.376.3l-1.248 3.33-.019.121c.019.023.1 0 .268.244h5.937c-.562 2.738-6.131 23.741-7.441 27.455-.125.3 0 .487.249.487.5-.061 3.41.023 4.875 0 .311-.061.436-.122.5-.426 1.31-3.957 4.7-16.073 7.131-27.516h6.375c.136 0 2.718-.033 4.138-.168l3.76 7.5c-3.278 3.6-7.371 8.6-10.756 12.306a.2.2 0 00.108.365H23.1c.27 0 6.518-7.4 8.453-9.854h.053S36.965 40 37.181 40h4.353c.214 0 .322-.157.214-.365-1.182-2.5-5.144-8.967-6.649-12.1 3.009-3.234 8.529-8.3 11.108-11.172.162-.154.108-.363-.162-.363z"/>
    </svg>