import React from 'react';
import Layout from '../components/Layout/Layout';
import {Link} from 'react-router-dom';
import Banner from '../images/Banner.jpg';
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
            <h1>Fenix Resturant</h1>
            <p>Designed to be the Culinary epicenter, We try to uphold the traditions of<br></br>
             the Local Household while bringing out the avours of Sri Lanka with a<br></br>
              bounty of fresh seasonal ingredients. We take extra care to deliver fresh<br>
              </br> farm produce to a local classy table cuisine with an emphasis on seasonal<br></br>
               & locally sourced ingredients and with the freshest Seafood.</p>
            <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home