import type { Rule } from '@unocss/core'
import { transitions } from './transition'
import { borders } from './border'

import { bgColors, colorScheme, opacity } from './color'
import { flex } from './flex'
import { fonts, tabSizes, textIndents, textShadows, textStrokes } from './typography'
import { gaps } from './gap'
import { grids } from './grid'
import { overflows } from './layout'
import { alignments, boxSizing, flexGridJustifiesAlignments, floats, insets, justifies, orders, placements, positions, zIndexes } from './position'
import { rings } from './ring'
import { boxShadows } from './shadow'
import { aspectRatio, sizes } from './size'
import { margins, paddings, spaces } from './spacing'
import { appearances, backgroundBlendModes, breaks, contains, contentVisibility, contents, cursors, displays, dynamicViewportHeight, fontSmoothings, fontStyles, hyphens, isolations, mixBlendModes, objectPositions, pointerEvents, resizes, screenReadersAccess, textOverflows, textTransforms, textWraps, userSelects, whitespaces, writingModes, writingOrientations } from './static'
import { transforms } from './transform'
import { cssProperty, cssVariables } from './variables'
import { textAligns, verticalAligns } from './align'
import { appearance, outline, willChange } from './behaviors'
import { textDecorations } from './decoration'
import { svgUtilities } from './svg'
import { safeArea } from './safe-area'
import { animations } from './animation'
import { backgroundStyles } from './background'
import { containerParent } from './container'
import { divides } from './divide'
import { lineClamps } from './line-clamp'
import { filters } from './filters'

export const rules: Rule[] = [
  animations,
  backgroundStyles,
  divides,
  cssVariables,
  cssProperty,
  paddings,
  margins,
  displays,
  opacity,
  bgColors,
  colorScheme,
  svgUtilities,
  borders,
  contentVisibility,
  contents,
  contains,
  fonts,
  tabSizes,
  textIndents,
  textOverflows,
  textDecorations,
  textStrokes,
  textShadows,
  textTransforms,
  textAligns,
  fontStyles,
  fontSmoothings,
  boxShadows,
  rings,
  flex,
  grids,
  gaps,
  positions,
  sizes,
  aspectRatio,
  cursors,
  appearances,
  pointerEvents,
  resizes,
  verticalAligns,
  userSelects,
  whitespaces,
  breaks,
  overflows,
  outline,
  appearance,
  orders,
  justifies,
  alignments,
  placements,
  flexGridJustifiesAlignments,
  insets,
  floats,
  zIndexes,
  boxSizing,
  transitions,
  transforms,
  willChange,
  containerParent,
  safeArea,
  contains,
  textWraps,
  dynamicViewportHeight,

  // should be the last
  // questionMark,

  // wind
  backgroundBlendModes,
  hyphens,
  isolations,
  mixBlendModes,
  objectPositions,
  screenReadersAccess,
  textTransforms,
  writingModes,
  writingOrientations,
  spaces,
  lineClamps,
  filters,
].flat(1)
