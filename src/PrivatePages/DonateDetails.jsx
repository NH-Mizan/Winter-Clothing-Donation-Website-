import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const DonateDetails = () => {
    useEffect(()=>{
        document.title= 'Dashboard || Winter Warmth'
    },[])
    const singleData = useLoaderData()
    const { division, status, description,contactInfo,  image, title } = singleData
    return (
        <div>
            <div className=' mx-auto w-11/12 '>
                <div className="hero bg-base-200 p-12">
                    <div className="bg-white p-8 rounded-xl ">
                        <img
                            src={image} className='w-full h-96 rounded-lg'/>
                        <div className='py-12'> 
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6 text-gary-200 text-xl ">
                             {description}
                            </p>
                            <div className="flex justify-between ">
                            <p className='font-bold text-xl'>{division}</p>
                            <p className='border-2 px-2 btn-info btn-outline rounded-full text-xl'>{status}</p>
                            </div>
                            <p className='font-bold py-8 '>{contactInfo}</p>
                            <button className="btn btn-primary justify-end">Donate Now</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DonateDetails;