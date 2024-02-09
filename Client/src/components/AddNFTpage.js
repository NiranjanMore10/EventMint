import React from "react";
import AddNFTForm from "./AddNFTform";

const AddNFTPage = ({ onAddNFT }) => {
  const handleAddNFT = (formData) => {
    // Pass the form data to the parent component
    onAddNFT(formData);
    console.log("Adding NFT:", formData);
  };

  return (
    <div className="flex justify-center  items-center h-screen">
      <AddNFTForm onAddNFT={handleAddNFT} />
    </div>
  );
};

export default AddNFTPage;
