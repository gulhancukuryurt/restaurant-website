import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <>
            <Box sx = {{textAlign: "center", bgcolor: "#1A1A19", color: "white", p:2 }}>
                <Box sx = {{my:3, "& svg": {
                    fontSize: "30px",
                    cursor: "pointer",
                    mr: 2
                },
                "& svg:hover": {
                      color: "#9fc5dd",
                      transform: "translateX(5px)",
                      transition: "all 400ms"
                }  
                
                }}>
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <FacebookIcon/>
                    <YouTubeIcon />
                </Box>
             
            </Box>
        </>
    )
}

export default Footer