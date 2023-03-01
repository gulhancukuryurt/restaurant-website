import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from "react-router-dom"
import Banner from '../components/Layout/img/bg.jpg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../styles/HomeStyle.css'


const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage: `url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>Healty Food</h1>
          <p>Healty Food Website </p>
          <Link to = "/menu">
            <button>
              <AddShoppingCartIcon/>
              Order Now
            </button>
          </Link>

        </div>
      </div>
    </Layout>
  )
}

export default Home