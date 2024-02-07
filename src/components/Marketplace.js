import React from "react";
import NFTItem from "./NFTItem";

const nftItems = [
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
  // Add more NFT items as needed
];

const Marketplace = () => {
  return (
    <main>
      <div className="mt-20 bg-gray-900 shadow-white h-72 shadow-sm">
        <h1 className="text-center pt-24 text-white font-bold text-7xl drop-shadow-xl shadow-white">
          NFT. MARKETPLACE
        </h1>
      </div>

      <main className="place-items-center grid grid-cols-5 ml-9 mr-9 gap-8 mt-24 mb-24">
        {/* Iterate over the list of NFT items */}
        {nftItems.map((item, index) => (
          <NFTItem
            key={index} // Make sure to provide a unique key for each item
            imageSrc={item.imageSrc}
            title={item.title}
            price={item.price}
          />
        ))}
      </main>
    </main>
  );
};

export default Marketplace;


