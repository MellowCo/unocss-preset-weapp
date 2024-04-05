export const numberWithUnitRE = /^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i
export const numberRE = /^(-?[0-9.]+)$/i
export const unitOnlyRE = /^(px)$/i
export const bracketTypeRe = /^\[(color|length|size|position|quoted|string):/i
export const splitComma = /,(?![^()]*\))/g
