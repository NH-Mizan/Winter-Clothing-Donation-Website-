import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DonationLayout = ({ card }) => {
    useEffect(()=>{
        document.title= 'Donation || Winter Warmth'
    },[])
    const { division, id, description, image, title } = card
    return (
        <div className=' mx-auto  '>
            <div className="card bg-base-100 p-2 w-80 md:w-84 lg:w-[450px]  shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" className='w-full h-[300px]'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-xl ">{title}</h2>
                    <div className='h-14 py-4 mb-4'><p className='text-lg  '>{description}</p></div>
                    <p className='text-lg font-bold my-4'>{division}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/details/${id}`}> <button className="btn btn-primary btn-outline">Donate Now </button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonationLayout;