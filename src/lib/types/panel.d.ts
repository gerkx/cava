import { baseCSSProps, flexAlignments } from '.';

type appName = 'AEFT' | 'ILST'
type appTheme = 'dark' | 'darkest' | 'light' | 'lightest' | 'gradient'
type aeftGrad = number;

export interface webTheme {
    appName: appName,
    theme: appTheme,
    gradientvalue?: aeftGrad 
}

export interface panelCSSProps extends baseCSSProps {
    alignContent?: flexAlignments;
    alignItems?: flexAlignments;
    justifyContent?: flexAlignments;
    gap?: string;
    height?: string;
    width?: string;
    fontSize?: string;
}