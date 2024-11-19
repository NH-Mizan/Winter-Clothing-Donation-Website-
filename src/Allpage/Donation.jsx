import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationLayout from './DonationLayout';

const Donation = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className=' bg-base-200'>
          
          <div className="text-center py-12">
                <h2 className="text-5xl mb-4 font-bold ">Donation Campaigns</h2>
                <p className="text-gray-400 font-bold">Help provide winter essentials like blankets, jackets, and food to vulnerable communities and bring comfort during harsh winters.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 w-11/12 mx-auto">
                {
                    data.map((card, i) => <DonationLayout key={i} card={card}></DonationLayout>)
                }
            </div>

        </div>
    );
};

export default Donation;