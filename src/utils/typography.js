import Typography from "typography"
import typographyTheme from "typography-theme-github"
import * as theme from "./theme"

typographyTheme.overrideThemeStyles = () => ({
  h1: {
    border: 0,
    margin: 0,
  },
  a: {
    color: theme.COLOR.SECONDARY,
  },
  blockquote: {
    borderLeft: `4px solid ${theme.COLOR.PRIMARY}`,
  },
})

const typography = new Typography(typographyTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
//TODO remove this and use directly typography.rythm
export const rhythm = typography.rhythm
export const scale = typography.scale
