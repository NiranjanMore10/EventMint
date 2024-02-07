import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MdStadium } from 'react-icons/md';

const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1946/1946433.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const SiteMap = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [nearbyStadiums, setNearbyStadiums] = useState([
    { name: 'Wankhede Stadium', position: [18.9389, 72.8258] },
    // Add more stadiums with their names and positions as needed
  ]);
  const [mapCenter, setMapCenter] = useState([18.9366806, 72.8220972]);
  const [mapZoom, setMapZoom] = useState(14);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition([latitude, longitude]);
          setMapCenter([latitude, longitude]);
          setMapZoom(14);

          try {
            // Reverse geocoding API call to get the user's address based on their location
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=6d93ea42fa824637910b14dea27574fa&q=${latitude},${longitude}&pretty=1`);
            const data = await response.json();
            const address = data.results[0].formatted;
            setUserAddress(address);
          } catch (error) {
            console.error('Error getting user address:', error.message);
          }
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {userPosition && (
          <Marker position={userPosition} icon={userIcon}>
            <Popup>
              <div>
                <p>{userAddress}</p>
              </div>
            </Popup>
          </Marker>
        )}

        {nearbyStadiums.map((stadium, index) => (
          <Marker key={index} position={stadium.position}>
            <Popup>
              <div>
                <MdStadium size={20} color="brown" />
                <p>{stadium.name}</p>
                {/* You can display additional information here */}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SiteMap;
