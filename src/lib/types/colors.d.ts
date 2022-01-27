export type brightnessThemeNames = 'darkest' | 'dark' | 'light' | 'lightest'

export type spectrumColorNames = (
    'gray-50' | 'gray-75' | 'gray-100'| 'gray-200'| 
    'gray-300'| 'gray-400'| 'gray-500'| 'gray-600'| 
    'gray-700'| 'gray-800'| 'gray-900'| 
    'blue-400'| 'blue-500'| 'blue-600'| 'blue-700'| 
    'red-400'| 'red-500'| 'red-600'| 'red-700'| 
    'orange-400'| 'orange-500'| 'orange-600'| 'orange-700'| 
    'green-400'| 'green-500'| 'green-600'| 'green-700'
)

export type themeColors = {
    [key in spectrumColorNames]: string
}

export type brightnessTheme = {
    [key in brightnessThemeNames]: themeColors
}