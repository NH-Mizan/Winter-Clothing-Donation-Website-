import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const HowToHelp = () => {
    useEffect(()=>{
        document.title= 'How to Help || Winter Warmth'
    },[])

    
    return (
        <div>
             <section className="bg-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">How to Help</h2>

        <p className="text-lg font-bold py-8 text-gray-700 mb-6 text-center">"Discover the Simple Steps to Make a Difference: Find a Campaign, Donate Warm Clothes, Spread Warmth, and Bring Smiles!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Donate Clothes</h3>
            <p className="text-gray-600">
              Contribute warm clothes like blankets, jackets, and sweaters to support those in need during winter.
            </p>
          </div>
          {/* Card 2 */}
          <div className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-xl font-semibold mb-2">Volunteer Locally</h3>
            <p className="text-gray-600">
              Join our team of volunteers to help distribute donations and organize local campaigns.
            </p>
          </div>
          {/* Card 3 */}
          <div className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-xl font-semibold mb-2">Monetary Contributions</h3>
            <p className="text-gray-600">
              Support our efforts by making a financial contribution to fund logistics and operations.
            </p>
          </div>
          {/* Card 4 */}
          <div className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="text-5xl mb-4">📢</div>
            <h3 className="text-xl font-semibold mb-2">Spread the Word</h3>
            <p className="text-gray-600">
              Share our campaigns on social media to raise awareness and encourage others to contribute.
            </p>
          </div>
        </div>
      </div>
    </section>
       
        </div>
    );
};

export default HowToHelp;