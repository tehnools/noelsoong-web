import * as createPalette from '@material-ui/core/styles/createPalette'
declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    success?: createPalette.PaletteColorOptions
    warning?: createPalette.PaletteColorOptions
    third?: createPalette.PaletteColorOptions
  }

  interface Palette {
    success: createPalette.PaletteColor
    warning: createPalette.PaletteColor
    third: createPalette.PaletteColor
  }
}
