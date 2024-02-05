import React from "react";
import NFTItem from "./NFTItem";

const nftItems = [
  {
    imageSrc: "https://tse4.mm.bing.net/th?id=OIP.0BLUPEUYgRbRu1-ZmrFe6wHaHa&pid=Api&P=0&h=180",
    title: "FIFA WORLD CUP SEASON PASS",
    price: "$89.00",
  },
  {
    imageSrc: "https://preview.redd.it/india-vs-pakistan-in-world-cup-2023-will-be-played-on-15th-v0-yxdnss9eicza1.jpg?auto=webp&s=c7389aa5ea0e463d2f839fae7db2d3f41f9fa74f",
    title: "INDIA VS PAKISTAN MATCH TICKET",
    price: "$69.00",
  },
  {
    imageSrc: "https://www.patriot-place.com/wp-content/uploads/2023/01/Ed-Sheeran-2023-square-2.jpg",
    title: "Ed Sheeran Mathematics Tour",
    price: "$130.00",
  },
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

      <main className="place-items-center grid grid-cols-4 mt-24 mb-24 ">
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
