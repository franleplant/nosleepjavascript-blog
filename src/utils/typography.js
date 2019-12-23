import Typography from "typography"
import FairyGates from "typography-theme-fairy-gates"

FairyGates.overrideThemeStyles = () => ({
  a: {
    textDecoration: "none",
    borderBottom: "1px solid",
    color:"#ff00ff",
    backgroundImage: "none"
  },

  "h1 a": {
    textDecoration: "none",
    borderBottom: "none",
  },

  blockquote: {
    borderLeft:"0.5rem solid #8000ff"
  },

  "a:hover": {
    color: "#ff0080",
  }
});


//delete FairyGates.googleFonts

FairyGates.baseFontSize = '17px' // was 20px.
FairyGates.lineHeight = '1.5' 
FairyGates.scaleRatio = 2.3
const typography =  new Typography(FairyGates)


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
