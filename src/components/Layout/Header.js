import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider } from '@mui/material'
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import { Link } from 'react-router-dom'
import "../../styles/HeaderStyle.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"#9fc5dd"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 1, p:1}}>
        <RestaurantOutlinedIcon/>
        My Restaurant
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li>
          <Link to={"/"} >Home</Link>
        </li>
        <li>
          <Link to={"/menu"} >Menu</Link>
        </li>
        <li>
          <Link to={"/about"} >About</Link>
        </li>
        <li>
          <Link to={"/contact"} >Contact</Link>
        </li>
      </ul>
    </Box>
  )
  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="white"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 1, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuOutlinedIcon sx={{fontSize:"240x", color:"white", mr:15, color:"#9fc5dd" }} />
            </IconButton>
            <Typography
              color={"#9fc5dd"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1}}>
              <RestaurantOutlinedIcon/>
              My Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={"/"} >Home</Link>
                </li>
                <li>
                  <Link to={"/menu"} >Menu</Link>
                </li>
                <li>
                  <Link to={"/about"} >About</Link>
                </li>
                <li>
                  <Link to={"/contact"} >Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "250px"
              }
            }} >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </div>
  )
}

export default Header