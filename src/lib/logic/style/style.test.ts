/**
 * @jest-environment jsdom
 */
import type { starletteProps } from '$lib/types'
import {iterateAndSetProps} from '.'

const style:starletteProps = {
    colorHeader: 'pink'
}
const element = document.createElement('div')

beforeAll(()=>{
    iterateAndSetProps(element, style)
})

test('sets an element\'s attr from an obj', () => {
    expect(element.style.getPropertyValue('--color-header')).toBe('pink')
})
