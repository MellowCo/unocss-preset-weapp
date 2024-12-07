import type { Variant } from '@unocss/core'
import type { PresetWeappOptions } from '..'
import type { Theme } from '../theme'
import { variantAria, variantTaggedAriaAttributes } from './aria'
import { variantBreakpoints } from './breakpoints'
import { variantChildren } from './children'
import { variantCombinators } from './combinators'
import { variantContainerQuery } from './container'
import { variantColorsMediaOrClass } from './dark'
import { variantDataAttribute, variantTaggedDataAttributes } from './data'
import { variantLanguageDirections } from './directions'
import { variantImportant } from './important'
import { variantCustomMedia, variantPrint } from './media'
import { variantCssLayer, variantInternalLayer, variantScope, variantSelector, variantSpaceAndDivide, variantTheme, variantVariables } from './misc'
import { variantNegative } from './negative'
import { variantPartClasses, variantPseudoClassesAndElements, variantPseudoClassFunctions, variantTaggedPseudoClasses } from './pseudo'
import { variantStartingStyle } from './startingstyle'
import { variantSupports } from './supports'

export function variants(options: PresetWeappOptions): Variant<Theme>[] {
  return [
    variantAria,
    variantDataAttribute,
    variantCssLayer,

    variantSelector,
    variantInternalLayer,
    variantNegative,
    variantStartingStyle,
    variantImportant(),
    variantSupports,
    variantPrint,
    variantCustomMedia,
    variantBreakpoints(),
    ...variantCombinators,
    variantSpaceAndDivide,

    ...variantPseudoClassesAndElements(),
    variantPseudoClassFunctions(),
    ...variantTaggedPseudoClasses(options),

    variantPartClasses,
    ...variantColorsMediaOrClass(options),
    ...variantLanguageDirections,
    variantScope,
    ...variantChildren,

    variantContainerQuery,
    variantVariables,
    ...variantTaggedDataAttributes,
    ...variantTaggedAriaAttributes,

    variantTheme,
  ]
}
