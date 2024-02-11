
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddNFTForm from './AddNFTform';
import Sidebar from './Sidebar';
import axios from "axios"
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ name, email, username }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);



    const navigateToNFT = () => {
        navigate('/AddNFTform');
    };
    const navigateToUpload=()=>{
        navigate('/Upload')
    }

    const navigateToAdd = () => {
        navigate('/EventForm');
    }
    axios.defaults.withCredentials=true;
    axios.get('http://localhost:5000/Profile')
    .then(result=>{console.log(result)
    if(result.data!=="Success"){
      navigate('/LoginpageNew')
    }
    else{
        email=result.data.email;
        username=result.data.username;

    }
})
.catch((error)=>console.log(error))
// useEffect(() => {
//     axios.get('http://localhost:5000/Profile')
//         .then(response => {
//             const { msg, email, username } = response.data;
//             if (msg === "Success") {
//                 setUserData({ email, username });
               
//             } else {
//                 navigate('/LoginpageNew');
//             }
//         })
//         .catch(error => {
//             setError(error.message);
           
//         });
// }, [navigate]);


// class myname

    return (
        <main className='flex flex-col sm:flex-row'>
            <Sidebar />
            <div className="flex-grow">
                <div className="container mx-auto py-8 px-4">
                    <div className="rounded-lg shadow-lg overflow-hidden backdrop-blur-[40px]">
                        <div className="px-6 py-4">
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-center">Profile</h1>
                            <div className="mb-10 mt-10">
                                {/* <div className="flex flex-col sm:flex-row items-center mb-8">
                                    <span className="text-lg sm:text-xl font-semibold text-white mr-2 mb-2 sm:mb-0">Name:</span>
                                    <p className="text-lg sm:text-xl text-gray-800">{name}</p>
                                </div> */}
                                {/* <hr className="border-t border-gray-200 mb-6" /> */}
                                <div className="flex flex-col sm:flex-row items-center mb-8">
                                    <span className="text-lg sm:text-xl font-semibold text-white mr-2 mb-2 sm:mb-0">Email:</span>
                                    <p className="text-lg sm:text-xl text-gray-800">{email}</p>
                                </div>
                                <hr className="border-t border-gray-200 mb-6" />
                                <div className="flex flex-col sm:flex-row items-center">
                                    <span className="text-lg sm:text-xl font-semibold text-white mr-2 mb-2 sm:mb-0">Username:</span>
                                    <p className="text-lg sm:text-xl text-gray-800">{username}</p>
                                </div>
                            </div>
                            <hr className="border-t border-gray-200 mb-6" />
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Activity</h2>
                            <p className="text-gray-800">No recent activity.</p>
                            <div className='buttons mt-12 flex flex-col sm:flex-row items-center'>
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    className="bg-black opacity-70 text-white text-lg sm:text-sm p-4 rounded-md hover:opacity-100 hover:cursor-pointer mb-4 sm:mb-0 mr-0 sm:mr-4"
                                    onClick={navigateToNFT}
                                >
                                    Add Your NFT
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    className="bg-black opacity-70 text-white text-lg sm:text-sm p-4 rounded-md hover:opacity-100 hover:cursor-pointer"
                                    onClick={navigateToAdd}
                                >
                                    Add Your Event
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    className="bg-black opacity-70 text-white text-lg sm:text-sm p-4 rounded-md mx-5 hover:opacity-100 hover:cursor-pointer"
                                    onClick={navigateToUpload}
                                >
                                    Mint Your NFT
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;
