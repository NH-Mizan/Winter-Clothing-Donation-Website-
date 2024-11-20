import React, { useEffect, useState } from 'react';

const HowtoWork = () => {

    return (
        <div>
            <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-8 text-primary">How to Work</h2>

                    <p className="text-lg text-center font-bold py-8 text-gray-700 mb-6">
                    "Learn how to donate winter clothes easily: find a campaign, contribute essentials, and help us deliver warmth to communities."</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div  className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105">
                            <div className="text-5xl mb-4">🛠️</div>
                            <h3 className="text-xl font-semibold mb-2">Step 1: Find a Campaign</h3>
                            <p className="text-gray-600">Explore active donation campaigns in your area and choose one that resonates with your heart.</p>
                        </div>
                        <div  className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105">
                            <div className="text-5xl mb-4">🎁</div>
                            <h3 className="text-xl font-semibold mb-2">Step 2: Donate Warm Clothes</h3>
                            <p className="text-gray-600">Fill out a simple form to contribute warm essentials like blankets, jackets, and sweaters.</p>
                        </div>
                        <div  className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105">
                            <div className="text-5xl mb-4">🚚</div>
                            <h3 className="text-xl font-semibold mb-2">Step 3: We Deliver to Communities</h3>
                            <p className="text-gray-600">Our dedicated volunteers ensure your donations reach the people who need them the most.</p>
                        </div>
                        <div  className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105">
                            <div className="text-5xl mb-4">❤️</div>
                            <h3 className="text-xl font-semibold mb-2">Step 4: Spread Warmth and Joy</h3>
                            <p className="text-gray-600">Witness the impact of your kindness as we bring warmth and smiles to those in need.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowtoWork;