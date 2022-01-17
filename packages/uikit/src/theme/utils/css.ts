// based on https://github.com/developit/dlv
export const get = (
  obj,
  key,
  def: any = undefined,
  p: any = undefined,
  undef: any = undefined,
) => {
  key = key && key.split ? key.split('.') : [key]
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }
  return obj === undef ? def : obj
}

const defaultBreakpoints = [40, 52, 64].map((n) => n + 'em')

const defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}

const aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY',
}

const multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height'],
}

const scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors',
}

const filterPx = {
  fontWeight: 'fontWeight',
  zIndex: 'zIndex',
  flexBasis: 'flex',
  flex: 'flex',
  opacity: 'opacity',
}

const positiveOrNegative = (scale, value) => {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value)
  }
  const absolute = Math.abs(value)
  const n = get(scale, absolute, absolute)
  if (typeof n === 'string') return '-' + n
  return n * -1
}

const transforms = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'top',
  'bottom',
  'left',
  'right',
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: positiveOrNegative,
  }),
  {},
)

export const responsive = (styles) => (theme) => {
  const next = {}
  const breakpoints = get(theme, 'breakpoints', defaultBreakpoints)
  const mediaQueries = [
    null,
    ...breakpoints.map((n) => `@media screen and (min-width: ${n})`),
  ]

  for (const key in styles) {
    const value =
      typeof styles[key] === 'function' ? styles[key](theme) : styles[key]

    if (value == null) continue
    if (!Array.isArray(value)) {
      next[key] = value
      continue
    }
    for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      const media = mediaQueries[i]
      if (!media) {
        next[key] = value[i]
        continue
      }
      next[media] = next[media] || {}
      if (value[i] == null) continue
      next[media][key] = value[i]
    }
  }

  return next
}

export const css =
  (args) =>
  (props: any = {}) => {
    const theme = { ...defaultTheme, ...(props.theme || props) }
    let result = {}
    const obj = typeof args === 'function' ? args(theme) : args
    const styles = responsive(obj)(theme)

    for (const key in styles) {
      const x = styles[key]
      const val = typeof x === 'function' ? x(theme) : x

      if (key === 'variant') {
        const variant = css(get(theme, val))(theme)
        result = { ...result, ...variant }
        continue
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme)
        continue
      }

      const prop = get(aliases, key, key)
      const scaleName = get(scales, prop)
      const scale = get(theme, scaleName, get(theme, prop, {}))
      const transform = get(transforms, prop, get)
      const value = transform(scale, val, val)

      if (multiples[prop]) {
        const dirs = multiples[prop]

        for (let i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value
        }
      } else {
        result[prop] = value
      }
    }

    for (let type in result) {
      if (typeof result[type] === 'number' && !(type in filterPx)) {
        result[type] += 'px'
      }
    }

    return result
  }

const support = {
  alignContent: 'alignContent',
  alignItems: 'alignItems',
  alignSelf: 'alignSelf',
  aspectRatio: 'aspectRatio',
  backfaceVisibility: 'backfaceVisibility',
  backgroundColor: 'backgroundColor',
  borderBottomColor: 'borderBottomColor',
  borderBottomLeftRadius: 'borderBottomLeftRadius',
  borderBottomRightRadius: 'borderBottomRightRadius',
  borderBottomWidth: 'borderBottomWidth',
  borderColor: 'borderColor',
  borderLeftColor: 'borderLeftColor',
  borderLeftWidth: 'borderLeftWidth',
  borderRadius: 'borderRadius',
  borderRightColor: 'borderRightColor',
  borderRightWidth: 'borderRightWidth',
  borderStyle: 'borderStyle',
  borderTopColor: 'borderTopColor',
  borderTopLeftRadius: 'borderTopLeftRadius',
  borderTopRightRadius: 'borderTopRightRadius',
  borderTopWidth: 'borderTopWidth',
  borderWidth: 'borderWidth',
  bottom: 'bottom',
  color: 'color',
  decomposedMatrix: 'decomposedMatrix',
  direction: 'direction',
  display: 'display',
  elevation: 'elevation',
  flex: 'flex',
  flexBasis: 'flexBasis',
  flexDirection: 'flexDirection',
  flexGrow: 'flexGrow',
  flexShrink: 'flexShrink',
  flexWrap: 'flexWrap',
  fontFamily: 'fontFamily',
  fontSize: 'fontSize',
  fontStyle: 'fontStyle',
  fontVariant: 'fontVariant',
  fontWeight: 'fontWeight',
  height: 'height',
  includeFontPadding: 'includeFontPadding',
  justifyContent: 'justifyContent',
  left: 'left',
  letterSpacing: 'letterSpacing',
  lineHeight: 'lineHeight',
  margin: 'margin',
  marginBottom: 'marginBottom',
  marginHorizontal: 'marginHorizontal',
  marginLeft: 'marginLeft',
  marginRight: 'marginRight',
  marginTop: 'marginTop',
  marginVertical: 'marginVertical',
  maxHeight: 'maxHeight',
  maxWidth: 'maxWidth',
  minHeight: 'minHeight',
  minWidth: 'minWidth',
  opacity: 'opacity',
  overflow: 'overflow',
  overflowY: 'overflowY',
  overlayColor: 'overlayColor',
  padding: 'padding',
  paddingBottom: 'paddingBottom',
  paddingHorizontal: 'paddingHorizontal',
  paddingLeft: 'paddingLeft',
  paddingRight: 'paddingRight',
  paddingTop: 'paddingTop',
  paddingVertical: 'paddingVertical',
  position: 'position',
  resizeMode: 'resizeMode',
  right: 'right',
  rotation: 'rotation',
  scaleX: 'scaleX',
  scaleY: 'scaleY',
  shadowColor: 'shadowColor',
  shadowOffset: 'shadowOffset',
  shadowOpacity: 'shadowOpacity',
  shadowRadius: 'shadowRadius',
  textAlign: 'textAlign',
  textAlignVertical: 'textAlignVertical',
  textDecorationColor: 'textDecorationColor',
  textDecorationLine: 'textDecorationLine',
  textDecorationStyle: 'textDecorationStyle',
  textShadowColor: 'textShadowColor',
  textShadowOffset: 'textShadowOffset',
  textShadowRadius: 'textShadowRadius',
  tintColor: 'tintColor',
  top: 'top',
  transform: 'transform',
  transformMatrix: 'transformMatrix',
  translateX: 'translateX',
  translateY: 'translateY',
  width: 'width',
  writingDirection: 'writingDirection',
  zIndex: 'zIndex',
  background: 'background',
}

export const cssProps = {
  ...support,
  ...aliases,
  ...multiples,
  ...scales,
  ...transforms,
}

export default css
