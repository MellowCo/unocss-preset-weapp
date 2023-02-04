import type { Rule } from '@unocss/core'
import { transitions } from './transition'
import { borders } from './border'
import { bgColors, opacity, textColors } from './color'
import { flex } from './flex'
import { fonts, tabSizes, textIndents, textShadows, textStrokes } from './typography'
import { gaps } from './gap'
import { grids } from './grid'
import { overflows } from './layout'
import { alignments, boxSizing, floats, insets, justifies, orders, placements, positions, zIndexes } from './position'
import { rings } from './ring'
import { boxShadows } from './shadow'
import { aspectRatio, sizes } from './size'
import { margins, paddings, spaces } from './spacing'
import { appearances, backgroundBlendModes, breaks, contains, contentVisibility, contents, cursors, displays, fontSmoothings, fontStyles, hyphens, isolations, mixBlendModes, objectPositions, pointerEvents, resizes, screenReadersAccess, textOverflows, textTransforms, userSelects, whitespaces, writingModes, writingOrientations } from './static'
import { transforms } from './transform'
import { cssProperty, cssVariables } from './variables'
import { questionMark } from './question-mark'
import { textAligns, verticalAligns } from './align'
import { appearance, outline, willChange } from './behaviors'
import { textDecorations } from './decoration'
import { svgUtilities } from './svg'
import { safeArea } from './safe-area'
import { animations } from './animation'
import { backgroundStyles } from './background'
import { containerParent } from './container'
import { divides } from './divide'

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
  textColors,
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

  // should be the last
  questionMark,

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
].flat(1)
