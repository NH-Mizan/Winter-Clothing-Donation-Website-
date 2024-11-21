import React, { useEffect } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonateDetails = () => {
    useEffect(() => {
        document.title = 'Dashboard || Winter Warmth'
    }, [])
    const singleData = useLoaderData()
    const { division, status, description, contactInfo, image, title } = singleData

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Thank you! We will reach your destination soon.',);

    }
    return (
        <div>
            <div className=' mx-auto w-11/12 '>
                <div
                    className="hero py-12"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/dBQJyTR/banner3.jpg)",
                    }}>
        

                    <div className="hero-content  p-12 rounded-xl flex flex-col lg:flex-row md:flex-row gap-12 bg-lime-200 text-center">
                        <div className=""><img src={image} alt="" className="rounded-lg h-80 w-80" /></div>
                        <div className="max-w-md text-left">

                            <p className="mb-5 flex gap-4 text-xl font-bold">
                                {title}
                            </p>
                            <p className="mb-5 flex gap-4 text-xl font-bold">
                                Division : {division}
                            </p>
                            <p className="mb-5 flex gap-4 text-xl font-bold">
                                {description}</p>
                            <p className="mb-5 flex gap-4 text-xl font-bold">
                                {contactInfo}</p>



                        </div>
                    </div>
                </div>

                {/* Donation Form */}
                <div className="w-11/122 mx-auto py-12 bg-green-100">
                <form className="mt-8 " onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Donation Form</h3>

                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">Quantity of Items</label>
                        <input
                            type="text"
                            id="quantity"
                            name="quantity"
                          
                 
                            placeholder="e.g., 2 jackets, 3 blankets"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="itemType" className="block text-gray-700 font-medium mb-2">Item Type</label>
                        <select
                            id="itemType"
                            name="itemType"
                 
     
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        >
                            <option value="">Select an item type</option>
                            <option value="Blanket">Blanket</option>
                            <option value="Jacket">Jacket</option>
                            <option value="Sweater">Sweater</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="pickupLocation" className="block text-gray-700 font-medium mb-2">Pickup Location</label>
                        <input
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                       
             
                            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                

                    <button
                        className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Submit Donation
                    </button>
                </form>
                </div>
            </div>

        </div>

 
    );
};

export default DonateDetails;