import type { Theme } from './types'
import { animation } from './animation'
import { aria } from './aria'
import { colors } from './colors'
import { blur, dropShadow } from './filters'
import { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight, textIndent, textShadow, textStrokeWidth, wordSpacing } from './font'
import { borderRadius, boxShadow, breakpoints, duration, lineWidth, media, ringWidth, spacing, verticalBreakpoints, zIndex } from './misc'
import { preflightBase } from './preflight'
import { containers, height, maxHeight, maxWidth, width } from './size'
import { easing, transitionProperty } from './transition'

export const theme: Theme = {
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth: maxWidth,
  minHeight: maxHeight,
  inlineSize: width,
  blockSize: height,
  maxInlineSize: maxWidth,
  maxBlockSize: maxHeight,
  minInlineSize: maxWidth,
  minBlockSize: maxHeight,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  breakpoints,
  verticalBreakpoints,
  borderRadius,
  lineHeight,
  letterSpacing,
  wordSpacing,
  boxShadow,
  textIndent,
  textShadow,
  textStrokeWidth,
  blur,
  dropShadow,
  easing,
  transitionProperty,
  lineWidth,
  spacing,
  duration,
  ringWidth,
  preflightBase,
  containers,
  animation,
  aria,
  zIndex,
  media,
}
