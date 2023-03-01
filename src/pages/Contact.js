import React from 'react'
import Layout from '../components/Layout/Layout'
import { Button, Box, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

const Contact = () => {
  return (
    <Layout>
       <Box sx={{
        my: 10,
        ml: 10,
        "& h4": {
          color:"#9fc5dd",
          textAlign:"center",
          fontWeight: "bold",
          mb: 2
        },

        "& p": {textAlign:"center"},
        "@media (max-width:600px)": {
          width: "300px",
          
        },
        "@media (max-width:400px)": {
         fontSize:"1rem",
          m: 3
        }
       

      }}>
        <Typography variant="h4">
          Contact My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam vitae venenatis dui, ut pulvinar dolor.
          Nulla quis tortor aliquam, sagittis odio a, aliquam nisi.
          Curabitur ut dolor vel urna consequat venenatis.
        </p>
      </Box>
      <Box sx={{
        m: 3,
        "@media (max-width:600px)": {
          width: "400px",
          m: 5
        },
        "@media (max-width:400px)": {
          width: "300px",
          m: 2
        }


      }}>
        <Box
          component="form"
          sx={{
            
            '& .MuiTextField-root': { m: 1, width: '500px', m: 4,
            "@media (max-width:600px)": {
              width: "300px",
              m: 5
            },
            "@media (max-width:400px)": {
              width: "300px",
              m: 3
            } },
          
          
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" sx={{ textAlign: "center", color: "#9fc5dd", fontSize: "1.5rem", fontWeight:"bold", m: 2, p: 2 }}>
            Contact Form
          </Typography>
          <Grid container direction="column" justify="center" alignItems="center" >

          <TextField
              id="name"
              label="Name-Surname"
              type="search"
              variant="standard"

            />
            <TextField
              id="email"
              label="Email"
              type="mail"
              variant="standard"

            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              placeholder="Send To Message"
            />
            <Button variant="contained" sx={{m:4, backgroundColor:"#9fc5dd"}} endIcon={<DownloadDoneIcon />}>
              Send
            </Button>
          
          </Grid>
          
         
        <TableContainer component={Paper} 
        sx={{marginTop:"60px",
        "@media (max-width:600px)": {
          width: "300px",
          m: 5
        },
        "@media (max-width:400px)": {
         fontSize:"1rem",
          m: 3
        }
        
        }}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "#9fc5dd", textAlign: "center", color: "white", fontSize: "1.2rem" }}>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <PhoneIcon sx={{ color: "red", pt: 1 }} /> 1234456495
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "red", pt: 1 }} /> info@myrest.com
                </TableCell>
              </TableRow>


            </TableBody>
          </Table>
        </TableContainer>

        </Box>
        
      </Box>
    </Layout>

  )
}

export default Contact