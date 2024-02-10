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
 const [featuredSlides, setFeaturedSlides] = useState([]);
  const handleEventSubmit = (imageUrl) => {
    // Add the new image URL to the existing array of featuredSlides
    setFeaturedSlides([...featuredSlides, imageUrl]);
  };

  const upcomingSlides = [
    'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/30232004/arijit-singh.jpeg',
    'https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Music-Concert-Event-Ticket-Design-1536x864.jpg',
    'https://s1.ticketm.net/dam/a/7d5/97b67038-f926-4676-be88-ebf94cb5c7d5_1802151_TABLET_LANDSCAPE_LARGE_16_9.jpg'
  ];
  const initialNFTs = [
    {
      imageSrc: "https://i.seadn.io/s/raw/files/21c89fb23006c3d424bbe9304b0f22c4.png?auto=format&dpr=1&w=512",
      title: "Zodiac #001",
      price: "0.12",
    },
    {
      imageSrc: "https://i.seadn.io/gcs/files/db2989d36f2b7c40c019a0cceb7b3a71.png?auto=format&dpr=1&w=512",
      title: "Zodiac #002",
      price: "0.04",
    },
    {
      imageSrc: "https://i.seadn.io/s/raw/files/22085c96c432ffe169c3c1dec3c5097d.jpg?auto=format&dpr=1&w=512",
      title: "Negative 1289",
      price: "0.10",
    },
    {
      imageSrc: "https://i.seadn.io/gcs/files/9b32deeb6b59d51f1ae009af70ca56ad.png?auto=format&dpr=1&w=512",
      title: "Zodiac #003",
      price: "0.002",
    },
    {
      imageSrc: "https://i.seadn.io/gcs/files/fb402688a93652f4bebb017e6dd29f6f.png?auto=format&dpr=1&w=512",
      title: "Zodiac #004",
      price: "0.24",
    },
    {
      imageSrc: "https://i.seadn.io/s/raw/files/b1182b0883a4972e125fc1f2e159e481.png?auto=format&dpr=1&w=512",
      title: "Zodiac #005",
      price: "0.10997",
    },
    {
      imageSrc: "https://i.seadn.io/gcs/files/1951e48af9d595c231d553571acd152c.png?auto=format&dpr=1&w=512",
      title: "Zodiac #006",
      price: "0.111",
    }
  ];
  const handleSubmit = (data) => {
    // Your handleSubmit logic here
    console.log('Submitted data:', data);
  };

  const [addedNFTs, setAddedNFTs] = useState([]);

  const handleAddNFT = (nft) => {
    // Add the new NFT to the existing array
    setAddedNFTs([...addedNFTs, nft]);
  };

  const [purchasedNFTs, setPurchasedNFTs] = useState([]);

  const handleAddPurchasedNFT = (newNFT) => {
    setPurchasedNFTs([...purchasedNFTs, newNFT]);
  };

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Events" element={<Events featuredSlides={featuredSlides} upcomingSlides={upcomingSlides} />} />
          <Route path="/MarketPlace" element={<Marketplace existingNFTs={addedNFTs} initialNFTs={initialNFTs} onPurchaseNFT={handleAddPurchasedNFT} />} />
          <Route path="/LoginpageNew" element={<LoginPage />} />
          <Route path="/Moviedetails" element={<MovieDetails />} />
          <Route path="/map" element={<Map />} />
          <Route path="/Profile" element={<ProfilePage name="Your Name" email="your@email.com" username="yourusername" />} />
          <Route path="/AddNFTForm" element={<AddNFTForm onSubmit={handleSubmit} onAddNFT={handleAddNFT} />} />
           <Route path="/EventForm" element={<EventForm onEventSubmit={handleEventSubmit} />} />
          <Route path='/Collectibles' element={<Collectibles purchasedNFTs={purchasedNFTs} />} />
        </Routes>
     
     
      </div>
         <Footer />
    </>
  );
}

export default App;
