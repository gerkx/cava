import { paramCase } from 'change-case';
import getPanelBG from 'starlette/utils/getPanelBG';

import type { brightnessTheme, brightnessThemeNames, spectrumColorNames, starletteProps, themeColors } from '$lib/types'

export const setCSSProps = (node:HTMLElement | SVGElement, props: starletteProps) => {
    iterateAndSetProps(node, props);
    return {
        update(props) {
            iterateAndSetProps(node, props)
        }
    }
}

export const setAdobeThemedColorProps = (node:HTMLElement | SVGElement, themes:brightnessTheme) => {
    iterateAndSetThemeColors(node, themes);
    return {
        update(themes) {
            iterateAndSetThemeColors(node, themes)
        }
    }
}

export const iterateAndSetProps = (node:HTMLElement | SVGElement, props: starletteProps | themeColors) => {
    Object.entries(props).forEach(([key, val]) => {
        node.style.setProperty(`--${paramCase(key)}`, val)
    })
}

const iterateAndSetThemeColors = (node:HTMLElement | SVGElement, themes:brightnessTheme) => {
    const theme = deriveTheme(themes)
    iterateAndSetProps(node, theme)
}

export const deriveTheme = (themes:brightnessTheme): themeColors => {
    let themeName:brightnessThemeNames = 'lightest';
    if (window.__adobe_cep__) {
        const panelBG = getPanelBG()[0];
        switch (panelBG) {
            case panelBG <= 34:
                themeName = 'darkest';
                break;
            case panelBG > 34 && panelBG <= 54:
                themeName = 'dark';
                break;
            case panelBG > 54 && panelBG <= 245:
                themeName = 'light';
                break;
            default:
                themeName = 'lightest';
                break;
        }
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeName = 'darkest';
    }
    return themes[themeName];
}

export const deriveBrowserTheme = (): brightnessThemeNames => {
    let themeName:brightnessThemeNames = 'lightest';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeName = 'darkest';
    }
    return themeName
}
