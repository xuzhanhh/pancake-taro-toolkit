class ThemeConfig {
  isDark = false
  isLight = true
  toggle(type: 'light' | 'dark') {
    this.isDark = type === 'dark'
    this.isLight = type === 'light'
  }
}
const themeConfig = new ThemeConfig()

export default themeConfig