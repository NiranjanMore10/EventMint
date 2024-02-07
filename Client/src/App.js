import { React, useState } from 'react'
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
import ProfilePage from './components/ProfilePage'
import Sidebar from './components/Sidebar'
import EventForm from './components/EventForm'
import AddNFTForm from './components/AddNFTform'
import MovieDetails from './components/MovieDetails'
import NFTBillingPage from './components/NFTBilling'
import Collectibles from './components/Collectibles'
import Map from './components/map'
const App = () => {
  const featuredSlides = [
    'https://autowithsid.in/wp-content/uploads/2023/06/Animal-Upcoming-Ranbir-Kapoor-Movie-2023.jpg',
    'https://bingeddata.s3.amazonaws.com/uploads/2022/05/Salaar-Poster-Teases-Prabhas-Kicking-Some-High-Octane-Action.jpg',
    'https://i.ytimg.com/vi/Kwmid4Ud1ao/maxresdefault.jpg'
  ];

  const upcomingSlides = [
    'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/30232004/arijit-singh.jpeg',
    'https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Music-Concert-Event-Ticket-Design-1536x864.jpg',
    'https://s1.ticketm.net/dam/a/7d5/97b67038-f926-4676-be88-ebf94cb5c7d5_1802151_TABLET_LANDSCAPE_LARGE_16_9.jpg'
  ];
  const handleSubmit = (data) => {
    // Your handleSubmit logic here
    console.log('Submitted data:', data);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Events" element={<Events featuredSlides={featuredSlides} upcomingSlides={upcomingSlides} />} />
        <Route path="/MarketPlace" element={<Marketplace />} />
        <Route path="/LoginpageNew" element={<LoginPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
      <Footer />
      {/* <MovieDetails
        posterUrl='https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9iYWZ5YmVpZWw3NnQzZ2lnZ3ljbmR1ZXNmajc2dnpkdXNheWNkZmNrcXh2bXhzczJkNG9mYjdyNDJ6ZS9IRUFERkFDRTAxMDc3XzAwNjcucG5n'
        title='Rejoice '
        description='"Rejoice" is a vibrant and uplifting piece of art that captures the essence of joy and celebration like flowers in full bloom, the orb of light is a third eye as an homage to the other side.'
      /> */}
    </>
    //   // <>
    //     {/* <div className=' flex'>
    //       <Sidebar />
    //       <Routes>
    //         <Route path='/Profile' element={<ProfilePage
    //           name="John Doe"
    //           email="johndoe@example.com"
    //           walletAddress="0x123abc..." />} />
    //         <Route path='/AddNFTform' element={<AddNFTForm onSubmit={handleSubmit} />} />
    //         <Route path='/EventForm' element={<EventForm />} />
    //         <Route path='/Collectibles' element={<Collectibles />} />
    //       </Routes>
    //     </div> */}
    // <MovieDetails
    //       posterUrl='https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9iYWZ5YmVpZWw3NnQzZ2lnZ3ljbmR1ZXNmajc2dnpkdXNheWNkZmNrcXh2bXhzczJkNG9mYjdyNDJ6ZS9IRUFERkFDRTAxMDc3XzAwNjcucG5n'
    //       title='Rejoice '
    //       description='"Rejoice" is a vibrant and uplifting piece of art that captures the essence of joy and celebration like flowers in full bloom, the orb of light is a third eye as an homage to the other side.'
    //     /> 
    // {/* </> */ }

  )
}
export default App;
// App.js

