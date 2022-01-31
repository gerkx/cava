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

export const setKeywordColorProps = () => {
    const blue = getComputedStyle(document.documentElement).getPropertyValue('--blue-500');
    const green = getComputedStyle(document.documentElement).getPropertyValue('--green-500');
    const orange = getComputedStyle(document.documentElement).getPropertyValue('--orange-500');
    const red = getComputedStyle(document.documentElement).getPropertyValue('--red-500');
    document.documentElement.style.setProperty(`--error`, red);
    document.documentElement.style.setProperty(`--warning`, orange);
    document.documentElement.style.setProperty(`--success`, green);
    document.documentElement.style.setProperty(`--primary`, blue);
}
