import React from "react";
import Sliderss from "./data";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
const EventsPage = ({ featuredSlides, upcomingSlides }) => {
    const navigate = useNavigate();
    const navigateToMap = () => {
        navigate('/map');
    }
    return (
        <main className="bg-transparent text-white min-h-screen">
            <div className="container mx-auto py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Featured Events</h2>
                    <div className="border-b border-white w-24 mx-auto mb-8"></div>
                </div>
                <div className="flex justify-center mb-12">
                    <Sliderss slides={featuredSlides} />
                </div>
            </div>
            <div className="bg-transparent py-20 m-2">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
                        <div className="border-b border-white w-24 mx-auto mb-8 m-4"></div>
                    </div>
                    <div className="pt-4 box-border m-auto flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Sliderss slides={upcomingSlides} />
                        <Sliderss slides={upcomingSlides} />
                        <Sliderss slides={upcomingSlides} />
                    </div>
                    <div className="flex justify-center mt-14">
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }}
                        >
                            <b className=" bg-black opacity-70 text-white size-5 text-center  pt-4 pb-4 rounded-md hover:opacity-100 hover:cursor-pointer pr-10 pl-10 " onClick={navigateToMap}>
                                Map
                            </b>
                        </motion.button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EventsPage;
