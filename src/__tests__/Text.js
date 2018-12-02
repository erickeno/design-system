import React from 'react'
import renderer from 'react-test-renderer'
import { Text, theme } from '..'

describe('Text', () => {
  test('renders', () => {
    const json = renderer.create(<Text />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('align prop sets text-align', () => {
    const json = renderer.create(<Text align="center" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-align', 'center')
  })

  test('regular prop sets font-weight', () => {
    const json = renderer.create(<Text regular />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-weight', theme.regular.toString())
  })

  test('bold prop sets font-weight', () => {
    const json = renderer.create(<Text bold />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-weight', theme.bold.toString())
  })

  test('caps prop sets text-transform', () => {
    const json = renderer.create(<Text caps />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-transform', 'uppercase')
  })

  test('italic prop sets font-style', () => {
    const json = renderer.create(<Text italic theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-style', 'italic')
  })

  test('fontSize prop sets font-size', () => {
    const f0 = renderer.create(<Text fontSize={0} />).toJSON()
    const f1 = renderer.create(<Text fontSize={1} />).toJSON()
    const f2 = renderer.create(<Text fontSize={2} />).toJSON()
    const f3 = renderer.create(<Text fontSize={3} />).toJSON()
    const f4 = renderer.create(<Text fontSize={4} />).toJSON()
    const f5 = renderer.create(<Text fontSize={5} />).toJSON()
    const f6 = renderer.create(<Text fontSize={6} />).toJSON()
    expect(f0).toHaveStyleRule('font-size', theme.fontSizes[0] + 'px')
    expect(f1).toHaveStyleRule('font-size', theme.fontSizes[1] + 'px')
    expect(f2).toHaveStyleRule('font-size', theme.fontSizes[2] + 'px')
    expect(f3).toHaveStyleRule('font-size', theme.fontSizes[3] + 'px')
    expect(f4).toHaveStyleRule('font-size', theme.fontSizes[4] + 'px')
    expect(f5).toHaveStyleRule('font-size', theme.fontSizes[5] + 'px')
    expect(f6).toHaveStyleRule('font-size', theme.fontSizes[6] + 'px')
  })

  test('lineHeight prop sets line-height', () => {
    const f0 = renderer.create(<Text lineHeight={0} />).toJSON()
    const f1 = renderer.create(<Text lineHeight={1} />).toJSON()
    const f2 = renderer.create(<Text lineHeight={2} />).toJSON()
    const f3 = renderer.create(<Text lineHeight={3} />).toJSON()
    const f4 = renderer.create(<Text lineHeight={4} />).toJSON()
    const f5 = renderer.create(<Text lineHeight={5} />).toJSON()
    const f6 = renderer.create(<Text lineHeight={6} />).toJSON()
    const f7 = renderer.create(<Text lineHeight="16px" />).toJSON()
    expect(f0).toHaveStyleRule('line-height', theme.lineHeights[0])
    expect(f1).toHaveStyleRule('line-height', theme.lineHeights[1])
    expect(f2).toHaveStyleRule('line-height', theme.lineHeights[2])
    expect(f3).toHaveStyleRule('line-height', theme.lineHeights[3])
    expect(f4).toHaveStyleRule('line-height', theme.lineHeights[4])
    expect(f5).toHaveStyleRule('line-height', theme.lineHeights[5])
    expect(f6).toHaveStyleRule('line-height', theme.lineHeights[6])
    expect(f7).toHaveStyleRule('line-height', '16px')
  })

  test('mt prop sets margin-top', () => {
    const json = renderer.create(<Text mt={2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin-top', theme.space[2] + 'px')
  })
})
