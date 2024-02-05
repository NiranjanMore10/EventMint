// AddNFTForm.js
import React, { useState } from "react";

const AddNFTForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [warning, setWarning] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price || !imageFile) {
 
      setWarning("Please fill in all fields.");
      return;
    }


    setWarning("");

    onSubmit({ title, price, imageFile });

    setTitle("");
    setPrice("");
    setImageURL("");
    setImageFile(null);
  };

  return (
    <div className="max-w-2xl mx-auto flex space-x-4">
      <form onSubmit={handleSubmit} className="flex-1 p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Your NFT</h2>
        {warning && <p className="text-red-500 mb-4">{warning}</p>}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter NFT Title" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Price:</label>
          <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter NFT Price" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">Image:</label>
          <input type="file" id="image" onChange={handleImageChange} accept="image/*" className="w-full px-3 py-2 border rounded" />
        </div>
        <button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add NFT</button>
      </form>

      {imageURL && (
        <div className="flex-1">
          <div className="size-fit group rounded-lg bg-black bg-opacity-15 space-y-2 shadow-sm shadow-black bg-opacity-25 mb-2 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img className="size-72" src={imageURL} alt="NFT Preview" />
            <div>
              <h1 className="font-bold text-white size-auto">{title.toUpperCase() || "TITLE"}</h1>
              <div className="pb-3 mt-2 flex space-x-3 place-items-center">
                <p className="text-white font-bold font-mono">Price: {price || "$0.00"}</p>
                <button className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full ">
                  Buy NFT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNFTForm;

