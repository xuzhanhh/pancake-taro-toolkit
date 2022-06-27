import css, { cssProps, get } from './css'
export const resolveAllStyle = (props, __styledCss, theme) => {
  const { sx = {}, __css = {}, variant = 'default', tx = 'variants', __styledCss: propsStyledCss = {}, ...rest } = props

  // get style props and rest props
  const styleProps = {}
  for (let i in rest) {
    if (i in cssProps) {
      styleProps[i] = rest[i]
      delete rest[i]
    }
  }

  // by the order of priority
  const baseStyle = css(__css)({ theme })
  const styledStyle = css(__styledCss)({ theme })
  const variantStyle = css(get(theme, tx + '.' + variant, get(theme, variant)))({ theme })
  const sxStyle = css(sx)({ theme })
  const propsStyle = css(styleProps)({ theme })
  const style = {
    ...baseStyle,
    ...variantStyle,
    ...styledStyle,
    ...sxStyle,
    ...propsStyle,
    ...propsStyledCss,
  }
  return style
}
