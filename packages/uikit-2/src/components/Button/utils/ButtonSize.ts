// Because the replacement for old design system
// the old size pair is [xl, l, m, s]
// the new one is [large, normal, small, tiny]
// the designers will use the new one
// but as for compatibal, the old size pair is use for exposed API.
// and meanwhile, we support new size pair for new design system

const currentSizes = {
  large: {
    px: 'md',
    py: 'ls',
    fontSize: 'md',
    lineHeight: '24px',
    minWidth: '80px',
  },

  normal: {
    px: 'sm',
    py: 's',
    fontSize: 'sm',
    lineHeight: '20px',
    minWidth: '60px',
  },

  small: {
    px: 'ls',
    py: 'xxs',
    fontSize: 'sm',
    lineHeight: '20px',
    minWidth: '52px',
  },

  tiny: {
    px: 'xs',
    py: 'minor',
    fontSize: 'xs',
    lineHeight: '16px',
    minWidth: '40px',
  },

  dwarf: {
    px: 'ls',
    py: 'tiny',
    fontSize: 'sm',
    lineHeight: '20px',
    minWidth: '123px',
  },

  giant: {
    px: 'md',
    py: 'xs',
    fontSize: 'md',
    lineHeight: '24px',
    minWidth: '100%',
  },
}

const prevSizes = {
  // xl for 'xl',and 'large' in new design system
  xl: currentSizes.large,

  // l for 'l',and 'normal' in new design system
  l: currentSizes.normal,

  // m for 'm',and 'small' in new design system
  m: currentSizes.small,

  // s for 's',and 'tiny' in new design system
  s: currentSizes.tiny,

  // 'xs' is not in the regular usage, so we still use it with no changing.
  xs: {
    px: 8,
    py: 4,
    fontSize: '12px',
    lineHeight: '12px',
    minHeight: 'auto',
  },
}

const sizes = {
  ...currentSizes,
  ...prevSizes,
}

export default sizes
