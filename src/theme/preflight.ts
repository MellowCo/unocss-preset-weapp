import { backdropFilterBase, boxShadowsBase, filterBase, ringBase, transformBase } from '../rules'

export const preflightBase = {
  ...transformBase,
  ...boxShadowsBase,
  ...ringBase,
  ...filterBase,
  ...backdropFilterBase,
}
