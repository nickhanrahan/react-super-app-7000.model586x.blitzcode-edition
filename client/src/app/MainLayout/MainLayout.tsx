import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { SxProps, Theme } from '@mui/material/styles'
import React, { FC, ReactNode } from 'react'

import NavBar from './NavBar'

const styles: { [key: string]: SxProps<Theme> } = {
  layoutBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentBox: {
    width: '100%',
    flexGrow: 1,
    p: 3,
  },
}

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={styles.layoutBox}>
      {/* Navigation Bar */}
      <NavBar />

      {/* Ensure the main content starts after the NavBar */}
      <Toolbar />

      {/* Main Content Area */}
      <Box component='main' sx={styles.contentBox}>
        {children} {/* Render the children dynamically */}
      </Box>
    </Box>
  )
}

export default MainLayout
