declare global {
    interface Window {
        __adobe_cep__:any
    }
}

export * from './base';
export * from './colors';
export * from './inputs'
export * from './panel';
export * from './svg';
export * from './starlette';