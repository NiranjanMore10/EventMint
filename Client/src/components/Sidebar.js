import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sidebar = ({ purchasedNFTs }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`bg-[rgba(0,0,0,0.1)] text-white ${isSidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 ease-in-out mr-14 backdrop-blur-3xl border-solid flex flex-col justify-between`}>
            <div className="p-4">
                <button onClick={toggleSidebar}>
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isSidebarOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>
            <motion.div
                initial="hidden"
                animate={isSidebarOpen ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            delay: isSidebarOpen ? 0.3 : 0,
                        },
                    },
                }}
            >
                <div className="flex items-center justify-between p-4">
                    <span className="text-lg font-bold mb-12 text-gray-800">Dashboard</span>
                </div>
                <div className="flex-grow">
                    <ul className="flex flex-col items-start">
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer mb-[100px]">
                            <Link to="/Profile">Profile</Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer mb-[100px]">
                            <Link to={{ pathname: "/Collectibles", state: { purchasedNFTs: purchasedNFTs } }}>Your Collectibles</Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer mb-[100px]">
                            <Link to="/metamask">Metamask</Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer mb-[100px]">
                            <Link to="/settings">Settings</Link>
                        </li>
                    </ul>
                </div>
                <div className="p-4">
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full w-full text-center">Logout</button>
                </div>
            </motion.div>
        </div>
    );
};

export default Sidebar;
