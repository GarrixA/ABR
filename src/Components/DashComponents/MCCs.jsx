import { Box } from '@mui/material'
import React from 'react'
import SideBar from '../Dashboard/SideBar'

const MCCs = () => {
  return (
    <>
   <Box sx={{ display: 'flex' }}>
      <SideBar/>
      <h1>MCCs</h1>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
      </Box>
      </Box>
   </>
  )
}

export default MCCs
