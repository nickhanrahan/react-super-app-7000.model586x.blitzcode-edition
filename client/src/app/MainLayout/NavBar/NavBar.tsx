import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'

const navBarOptions = [
  {
    title: 'LIKE',
    href: '/like',
  },
  {
    title: 'TEXTS',
    href: '/texts',
  },
]

const NavBar: FC = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar disableGutters>
        <Box p={4} />
        <Box p={4}>
          <Link color='inherit' href={'/'}>
            <HomeIcon fontSize='large' />
          </Link>
        </Box>
        {navBarOptions.map((option, optionIndex) => {
          return (
            <Box p={4} key={`${optionIndex}${option.title}`}>
              <Link color='inherit' underline='none' href={option.href}>
                <Typography variant='h6'>{option.title}</Typography>
              </Link>
            </Box>
          )
        })}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
