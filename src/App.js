
import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Homepage'
import Events from './components/Events'

import Marketplace from './components/Marketplace'


import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'


import Card from './components/Card'
import './styles.css'

import SiteMap from './components/map'
import LoginPage from './components/LoginpageNew'
import SignUpPage from './components/SignupPage'
import AddNFTPage from './components/AddNFTpage'
//import NFTMarketplaceProvider from './Context/NFTMarketplaceContext'


const App = () => {

  return (
    <>
    
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/MarketPlace" element={<Marketplace/>} />
       
        <Route path="/LoginpageNew" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
      <Footer />
    



    </>

  )
}

export default App;



//App.js

