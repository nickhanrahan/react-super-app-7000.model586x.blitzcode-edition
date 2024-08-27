import { createTheme } from '@mui/material'

import { getComponentThemes } from './componentThemes'
import { paletteTheme } from './paletteTheme'
import { typographyTheme } from './typographyTheme'

export const theme = createTheme({
  spacing: 2,
  palette: paletteTheme,
  typography: typographyTheme,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: getComponentThemes(createTheme({ palette: paletteTheme })),
})
