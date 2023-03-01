import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box, Typography} from "@mui/material"
import Image from 'mui-image'

const About = () => {
    return (
        <Layout>
        <Image 
        src="https://www.literarestaurant.com/images/slider2.png"
        sx={{ display: { sm: 'inline', lg: 'inline', md:"inline" }}} 
        />
         
           <Box 
           
           sx={{
             
             my:5,
             textAlign:"center",
             "& h4": {
                fontWeight: "bold",
                my:2,
                fontSize: '2rem',
             },
             "& p" : {
                  textAlign: "justify"
             },

             "@media (max-width:600px)" : {
                mt:0,
                "& h4" : {
                    fontSize: "1.5rem",
                    mt: 1
                }
             }
             
             }}>
               <Typography variant = "h4" style = {{textAlign: "center", color:"#9fc5dd"}}>
                  Welcome To My Restaurant
               </Typography>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Nam vitae venenatis dui, ut pulvinar dolor. 
               Nulla quis tortor aliquam, sagittis odio a, aliquam nisi. 
               Curabitur ut dolor vel urna consequat venenatis. 
               Mauris iaculis ipsum a ipsum efficitur, tempus convallis neque tincidunt. 
               Ut a enim vel diam ultrices rhoncus at condimentum justo. 
               Phasellus sodales, leo posuere blandit volutpat, dolor nisi aliquet diam, vel rhoncus leo orci vitae est. 
               Mauris commodo pellentesque rutrum. Fusce ante mauris, mollis vel iaculis nec, venenatis eu nunc.
               </p>
               <br/>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Nam vitae venenatis dui, ut pulvinar dolor. 
               Nulla quis tortor aliquam, sagittis odio a, aliquam nisi. 
               Curabitur ut dolor vel urna consequat venenatis. 
               Mauris iaculis ipsum a ipsum efficitur, tempus convallis neque tincidunt. 
               Ut a enim vel diam ultrices rhoncus at condimentum justo. 
               Phasellus sodales, leo posuere blandit volutpat, dolor nisi aliquet diam, vel rhoncus leo orci vitae est. 
               Mauris commodo pellentesque rutrum. Fusce ante mauris, mollis vel iaculis nec, venenatis eu nunc.
               </p>
               <br/>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Nam vitae venenatis dui, ut pulvinar dolor. 
               Nulla quis tortor aliquam, sagittis odio a, aliquam nisi. 
               Curabitur ut dolor vel urna consequat venenatis. 
               Mauris iaculis ipsum a ipsum efficitur, tempus convallis neque tincidunt. 
               Ut a enim vel diam ultrices rhoncus at condimentum justo. 
               Phasellus sodales, leo posuere blandit volutpat, dolor nisi aliquet diam, vel rhoncus leo orci vitae est. 
               Mauris commodo pellentesque rutrum. Fusce ante mauris, mollis vel iaculis nec, venenatis eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Nam vitae venenatis dui, ut pulvinar dolor. 
               Nulla quis tortor aliquam, sagittis odio a, aliquam nisi. 
               Curabitur ut dolor vel urna consequat venenatis. 
               Mauris iaculis ipsum a ipsum efficitur, tempus convallis neque tincidunt. 
               Ut a enim vel diam ultrices rhoncus at condimentum justo. 
               Phasellus sodales, leo posuere blandit volutpat, dolor nisi aliquet diam, vel rhoncus leo orci vitae est. 
               Mauris commodo pellentesque rutrum. Fusce ante mauris, mollis vel iaculis nec, venenatis eu nunc.
               </p>
               <br/>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Nam vitae venenatis dui, ut pulvinar dolor. 
               Nulla quis tortor aliquam, sagittis odio a, aliquam nisi. 
               Curabitur ut dolor vel urna consequat venenatis. 
               Mauris iaculis ipsum a ipsum efficitur, tempus convallis neque tincidunt. 
               Ut a enim vel diam ultrices rhoncus at condimentum justo. 
               Phasellus sodales, leo posuere blandit volutpat, dolor nisi aliquet diam, vel rhoncus leo orci vitae est. 
               Mauris commodo pellentesque rutrum. Fusce ante mauris, mollis vel iaculis nec, venenatis eu nunc.
               </p>
               <br/>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Nam vitae venenatis dui, ut pulvinar dolor. 
               Nulla quis tortor aliquam, sagittis odio a, aliquam nisi. 
               Curabitur ut dolor vel urna consequat venenatis. 
               Mauris iaculis ipsum a ipsum efficitur, tempus convallis neque tincidunt. 
               Ut a enim vel diam ultrices rhoncus at condimentum justo. 
               Phasellus sodales, leo posuere blandit volutpat, dolor nisi aliquet diam, vel rhoncus leo orci vitae est. 
               Mauris commodo pellentesque rutrum. Fusce ante mauris, mollis vel iaculis nec, venenatis eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Nam vitae venenatis dui, ut pulvinar dolor. 
               Nulla quis tortor aliquam, sagittis odio a, aliquam nisi. 
               Curabitur ut dolor vel urna consequat venenatis. 
               Mauris iaculis ipsum a ipsum efficitur, tempus convallis neque tincidunt. 
               Ut a enim vel diam ultrices rhoncus at condimentum justo. 
               Phasellus sodales, leo posuere blandit volutpat, dolor nisi aliquet diam, vel rhoncus leo orci vitae est. 
               Mauris commodo pellentesque rutrum. Fusce ante mauris, mollis vel iaculis nec, venenatis eu nunc.
               </p>
               <br/>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Nam vitae venenatis dui, ut pulvinar dolor. 
               Nulla quis tortor aliquam, sagittis odio a, aliquam nisi. 
               Curabitur ut dolor vel urna consequat venenatis. 
               Mauris iaculis ipsum a ipsum efficitur, tempus convallis neque tincidunt. 
               Ut a enim vel diam ultrices rhoncus at condimentum justo. 
               Phasellus sodales, leo posuere blandit volutpat, dolor nisi aliquet diam, vel rhoncus leo orci vitae est. 
               Mauris commodo pellentesque rutrum. Fusce ante mauris, mollis vel iaculis nec, venenatis eu nunc.
               </p>
               
            </Box>
            
        </Layout>

    )
}

export default About