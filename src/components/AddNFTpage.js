// AddNFTPage.js
import React from "react";
import AddNFTForm from "./AddNFTform";

const AddNFTPage = () => {
  const handleAddNFT = (formData) => {
  
    console.log("Adding NFT:", formData);

  };

  return (
    <div className="flex justify-center items-center h-screen">
      <AddNFTForm onSubmit={handleAddNFT} />
    </div>
  );
};

export default AddNFTPage;
