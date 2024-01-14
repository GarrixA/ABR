import { Box } from '@mui/material'
import SideBar from '../Dashboard/SideBar'

const Dashboard = () => {
  return (
   <>
   <Box sx={{ display: 'flex' }}>
      <SideBar/>
      <h1>Dashboard</h1>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
      </Box>
      </Box>
   </>
  )
}

export default Dashboard
