import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { routes } from '../routes/routes'
import { theme } from '../shared/theme/theme'

import MainLayout from './MainLayout'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
