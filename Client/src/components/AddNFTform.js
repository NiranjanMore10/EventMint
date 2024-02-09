import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddNFTForm = ({ onAddNFT }) => {
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

    // Call the onAddNFT function with the form data
    onAddNFT({ title, price, imageURL });

    setTitle("");
    setPrice("");
    setImageURL("");
    setImageFile(null);
  };

  AddNFTForm.propTypes = {
    onAddNFT: PropTypes.func.isRequired,
  };

  return (
    <div className="flex justify-center m-36  space-x-4">
      <section className="flex justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent rounded-lg p-8 max-w-[100%] shadow-lg backdrop-blur-[30px] w-[80%] "
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Add Your NFT</h2>
          {warning && <p className="text-red-500 mb-4">{warning}</p>}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter NFT Title"
              className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500 font-[500] text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">
              Price:
            </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter NFT Price"
              className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">
              Image:
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
            >
              Add NFT
            </button>
          </div>
        </form>
      </section>
      <section className="flex justify-center items-center">
        {imageURL && (
          <div className="size-fit group rounded-lg bg-black bg-opacity-15 space-y-2 shadow-sm shadow-black bg-opacity-25 mb-2 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img className="size-72" src={imageURL} alt="NFT Preview" />
            <div>
              <h1 className="font-bold text-white size-auto">{title.toUpperCase() || "TITLE"}</h1>
              <div className="pb-3 mt-2 flex space-x-3 place-items-center">
                <p className="text-white font-bold font-mono">Price: {price || "$0.00"}</p>
                <button type="button" className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full" onClick={handleSubmit}>
                  Buy NFT
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AddNFTForm;
