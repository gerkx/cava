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
        <path d="M26 0v10h10L26 0zm19.231 36h-1.056a1.012 1.012 0 00-.984.863 9.134 9.134 0 01-8.846 7.717 8.15 8.15 0 01-5.66-2.135l3.079-3.08a.784.784 0 00.236-.56.803.803 0 00-.801-.805H22.5a.5.5 0 00-.5.5v8.698a.801.801 0 00.806.802.784.784 0 00.56-.236l3.009-3.008A11.568 11.568 0 0034.345 48c6.024 0 10.995-4.725 11.885-10.891a.995.995 0 00-.999-1.11zm-21.772 0h1.056a1.012 1.012 0 00.984-.864 9.134 9.134 0 018.846-7.716 8.692 8.692 0 015.297 1.808l-3.406 3.406a.784.784 0 00-.236.56.803.803 0 00.801.806H45.5a.5.5 0 00.5-.5v-8.698a.801.801 0 00-.806-.802.784.784 0 00-.56.236l-2.676 2.676A11.457 11.457 0 0034.345 24c-6.023 0-10.995 4.724-11.886 10.89a.995.995 0 001 1.11z"/>
<path d="M18 36a15.906 15.906 0 0118-15.862V14H24a2 2 0 01-2-2V0H6a2 2 0 00-2 2v36a2 2 0 002 2h12.524A15.974 15.974 0 0118 36z"/>
    </svg>