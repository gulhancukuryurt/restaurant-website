import React from 'react'
import { MenuList } from "../data/data"
import Layout from '../components/Layout/Layout'
import EuroIcon from '@mui/icons-material/Euro';
import { Box, Card, Rating, CardContent, CardMedia, Typography } from "@mui/material"

const Menu = () => {
    return (
        <Layout>
              <Typography variant="h5" sx={{ color: "#9fc5dd", fontSize:"30px", textAlign: "center", mt:5 }}>
                                    Menu List
                                </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 8, m: 5 }}>
                {
                    MenuList.map((menu) => (

                        <Card sx={{ maxWidth: 400,border: '5px solid #9fc5dd'}}>
                            <CardMedia
                                height="300px"
                                width="300px"
                                component="img"
                                image={menu.image}
                                alt={menu.name}
                                sx={{
                                       transition: "all 0.2s ease",
                                       "&:hover": {
                                         transform: "scale3d(1.1, 1.1, 1)"
                                       }
                                     }}
                              
                            />
                            <CardContent>
                                <Typography variant="h5" sx={{ color: "red", textAlign: "center" }}>
                                    {menu.name}
                                </Typography>
                                <Typography>
                                    {menu.description}
                                </Typography>
                                <Typography sx={{backgroundColor:"#9fc5dd", textAlign:"center", m:2, color:"white", fontWeight:"bold"}}>
                                   
                                    {menu.price}<EuroIcon sx={{ fontSize: "12px" }} />
                                    
                                </Typography>
                                
                                <Rating sx={{mx:15}} name="size-medium" defaultValue={3} />

                                
                            </CardContent>

                        </Card>

                    ))
                }
            </Box>

        </Layout>
    )
}

export default Menu