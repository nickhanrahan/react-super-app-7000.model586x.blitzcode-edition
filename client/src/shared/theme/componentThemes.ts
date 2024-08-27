import { Components } from '@mui/material/styles'
import { Theme } from '@mui/material/styles/createTheme'

export const getComponentThemes = (theme: Theme): Components<Omit<Theme, 'components'>> => ({
  MuiButton: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  // Add other component overrides here, using theme.palette as needed
})
