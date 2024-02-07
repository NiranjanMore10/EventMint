import React from 'react';

const EventForm = () => {
    return (
        <div className="  flex justify-center items-center w-[80%] ">
            <div className="bg-transparent rounded-lg p-8 max-w-[100%]  shadow-lg backdrop-blur-[30px] w-[80%]  m-[30px] mt-[50px]">
                <h1 className="text-3xl font-bold text-center text-white mb-8">Add Your Event</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="eventName" className="block text-white font-medium">Event Name</label>
                        <input type="text" id="eventName" className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500 font-[500] text-white" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-white font-medium">Email</label>
                        <input type="email" id="email" className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className="block text-white font-medium text-bold">Contact Number</label>
                        <input type="tel" id="contactNumber" className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="eventLocation" className="block text-white font-medium">Location of Event</label>
                        <input type="text" id="eventLocation" className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="eventType" className="block text-white font-medium">Event Type</label>
                        <select id="eventType" className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500 text-black" required>
                            <option value="" disabled selected className='text-white bg-transparent'>Select Event Type</option>
                            <option className='bg-transparent'> Sports</option>
                            <option>Concert</option>
                            <option>Art</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="ticketPrice" className="block text-white font-medium">NFT Ticket Price (In Rs.)</label>
                        <input type="number" id="ticketPrice" className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500" required />
                    </div >
                    <div>
                        <label htmlFor="startDate" className="block text-white font-medium">Start Date</label>
                        <input type="date" id="startDate" className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="endDate" className="block text-white font-medium">End Date</label>
                        <input type="date" id="endDate" className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="eventDescription" className="block text-white font-medium">Event Description</label>
                        <textarea id="eventDescription" className="w-full bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500" required></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-6 hover:bg-blue-600 transition duration-300 ease-in-out flex align-middle">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EventForm;