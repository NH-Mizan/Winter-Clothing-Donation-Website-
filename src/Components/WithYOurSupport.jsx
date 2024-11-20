import React from 'react';

const WithYOurSupport = () => {
    return (
        <div>
            <section className="bg-white w-11/12 py-12 mx-auto ">
                <div className="container mx-auto text-center w-11/12 ">
                    <div className="flex flex-col md:flex-row lg:flex-row lg:jstify-between gap-8 items-center ">
                        <div className="">
                            <h2 className="text-5xl text-left py-8 font-bold text-primary ">
                            With Your Support, Everyone Can Enjoy A Warm Cloth
                            </h2>
                            <p className="text-xl text-left  text-gray-700 mb-8">
                                Donating to
                                Winter Warmth appeal Special program is a meaningful way to make a positive change in the lives of those who are most helpless during the winter months. Your donate clothes to homeless brings warmth, comfort, and hope to those who need them most.
                            </p>
                            <div className="flex justify-around">
                                
                            <div className="">
                                <h1 className='font-bold text-5xl text-red-500' >0</h1>
                                <h2 className='text-xl font-bold'>Orphan We Helped</h2>
                            </div>
                            <div className="">
                                <h1 className='font-bold text-5xl text-red-500' >0</h1>
                                <h2 className='text-xl font-bold'>Volunteers In 2024</h2>
                            </div>
                            </div>
                        </div>
                        <img src="https://i.ibb.co.com/XXzpKkQ/Blanket-03-2.jpg" alt="" className="w-[500px] rounded-xl" />
                    </div>
                   
                </div>
            </section>

        </div>
    );
};

export default WithYOurSupport;