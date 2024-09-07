import type { Rule } from '@unocss/core'
import { textAligns, verticalAligns } from './align'
import { animations } from './animation'

import { backgroundStyles } from './background'
import { appearance, outline, willChange } from './behaviors'
import { borders } from './border'
import { bgColors, colorScheme, opacity } from './color'
import { containerParent } from './container'
import { textDecorations } from './decoration'
import { divides } from './divide'
import { filters } from './filters'
import { flex } from './flex'
import { gaps } from './gap'
import { grids } from './grid'
import { overflows } from './layout'
import { lineClamps } from './line-clamp'
import { alignments, boxSizing, flexGridJustifiesAlignments, floats, insets, justifies, orders, placements, positions, zIndexes } from './position'
import { rings } from './ring'
import { safeArea } from './safe-area'
import { boxShadows } from './shadow'
import { aspectRatio, sizes } from './size'
import { margins, paddings, spaces } from './spacing'
import { appearances, backgroundBlendModes, breaks, contains, contents, contentVisibility, cursors, displays, dynamicViewportHeight, fontSmoothings, fontStyles, hyphens, isolations, mixBlendModes, objectPositions, pointerEvents, resizes, screenReadersAccess, textOverflows, textTransforms, textWraps, userSelects, whitespaces, writingModes, writingOrientations } from './static'
import { svgUtilities } from './svg'
import { transforms } from './transform'
import { transitions } from './transition'
import { fonts, tabSizes, textIndents, textShadows, textStrokes } from './typography'
import { cssProperty, cssVariables } from './variables'

export const rules: Rule[] = [
  cssVariables,
  cssProperty,
  contains,
  screenReadersAccess,
  pointerEvents,
  appearances,
  positions,
  insets,
  lineClamps,
  isolations,
  zIndexes,
  orders,
  grids,
  floats,
  margins,
  boxSizing,
  displays,
  aspectRatio,
  sizes,
  flex,
  transforms,
  animations,
  cursors,
  userSelects,
  resizes,
  appearance,
  placements,
  alignments,
  justifies,
  gaps,
  flexGridJustifiesAlignments,
  spaces,
  divides,
  overflows,
  textOverflows,
  whitespaces,
  breaks,
  borders,
  bgColors,
  backgroundStyles,
  colorScheme,
  svgUtilities,
  objectPositions,
  paddings,
  safeArea,
  textAligns,
  textIndents,
  textWraps,
  verticalAligns,
  fonts,
  textTransforms,
  fontStyles,
  textDecorations,
  fontSmoothings,
  tabSizes,
  textStrokes,
  textShadows,
  hyphens,
  writingModes,
  writingOrientations,
  opacity,
  backgroundBlendModes,
  mixBlendModes,
  boxShadows,
  outline,
  rings,
  filters,
  transitions,
  willChange,
  contentVisibility,
  contents,
  containerParent,
  dynamicViewportHeight,

].flat(1)
