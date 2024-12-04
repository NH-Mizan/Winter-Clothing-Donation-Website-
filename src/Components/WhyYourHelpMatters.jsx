import React from 'react';
import 'animate.css';

const WhyYourHelpMatters = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Title with Animation */}
                    <h2 className="text-4xl font-bold text-center mb-8 text-primary animate__animated animate__fadeInDown">
                        Why Your Help Matters
                    </h2>

                    {/* Section Description with Animation */}
                    <p className="text-lg text-center font-bold py-8 text-gray-700 mb-6 animate__animated animate__fadeInUp">
                        Your contributions make a real difference in the lives of those struggling during the harsh winter months. Together, we can bring warmth and hope to those in need.
                    </p>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105 animate__animated animate__zoomIn">
                            <div className="text-5xl mb-4">❄️</div>
                            <h3 className="text-xl font-semibold mb-2">Combat Winter Hardships</h3>
                            <p className="text-gray-600">
                                Many families lack basic winter essentials. Your donations help protect them from the cold and ensure their well-being.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105 animate__animated animate__zoomIn animate__delay-1s">
                            <div className="text-5xl mb-4">💓</div>
                            <h3 className="text-xl font-semibold mb-2">Show Compassion</h3>
                            <p className="text-gray-600">
                                Your kindness helps restore dignity and brings smiles to those who need support the most this winter.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="card bg-white shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105 animate__animated animate__zoomIn animate__delay-2s">
                            <div className="text-5xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold mb-2">Strengthen Communities</h3>
                            <p className="text-gray-600">
                                By helping others, we create stronger, more connected communities that thrive together in times of need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyYourHelpMatters;
