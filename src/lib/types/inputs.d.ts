import type { baseCSSProps } from ".";

export type inputVariant = (
    'quiet' |
    'silent' |
    null
)

export type buttonVariant = (
    'quiet' |
    'silent' |
    'solid' |
    null
)

export type inputSize = (
    'xs' |
    's' |
    'l' |
    'xl' |
    null
)

export interface buttonCSSProps extends baseCSSProps {
    scale?: number;
    fontSize?: string        
    gap?: string;
}

export type txtInputType = (
    'email' |
    'number' |
    'password' |
    'search' |
    'tel' |
    'text' |
    'url' 
)
