import SideBar from '../Dashboard/SideBar'
import { Box } from '@mui/material'

const MyAccount = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <h1>My account</h1>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      
    </Box>
    </Box>
 </>
  )
}

export default MyAccount
