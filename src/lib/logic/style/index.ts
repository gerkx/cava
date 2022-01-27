import { paramCase } from 'change-case';

import type { starletteProps } from '$lib/types'

export const setCSSProps = (node:HTMLElement | SVGElement, props: starletteProps) => {
    iterateAndSetProps(node, props);
    return {
        update(props) {
            iterateAndSetProps(node, props)
        }
    }
}

export const iterateAndSetProps = (node:HTMLElement | SVGElement, props: starletteProps) => {
    Object.entries(props).forEach(([key, val]) => {
        node.style.setProperty(`--${paramCase(key)}`, val)
    })
}