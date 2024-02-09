import React from "react";
import NFTItem from "./NFTItem";

const Collectibles = ({ purchasedNFTs }) => {
  if (!purchasedNFTs || purchasedNFTs.length === 0) {
    return (
      <div className="text-center">
        <p>No collectibles available</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center pt-24 text-white font-bold text-4xl sm:text-7xl drop-shadow-xl shadow-white">
        Your Collectibles
      </h1>
      <div className="place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml-9 mr-9 gap-8 mt-8 mb-8">
        {purchasedNFTs.map((item, index) => (
          <NFTItem
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Collectibles;
