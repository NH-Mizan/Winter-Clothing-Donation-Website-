import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    const images = [
        "https://i.ibb.co.com/Q8bjbty/banner2webp.webp",
        "https://i.ibb.co.com/D1VWhxs/banner1.jpg",
        "https://i.ibb.co.com/dBQJyTR/banner3.jpg",
        "https://i.ibb.co.com/Bs4cvFJ/banner4.jpg",
        "https://i.ibb.co.com/M9xNsr2/banner5.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);



    return (
        <div className="relative overflow-hidden w-full max-w-full mx-auto h-full pb-8">
            <div
                className="flex transition-transform duration-1000"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[80vh] flex-shrink-0 "
                    />
                ))}
            </div>

        
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                    className="btn btn-circle"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === 0 ? images.length - 1 : prevIndex - 1
                        )
                    }
                >
                    ❮
                </button>
                <div className="text-center bg-[#f189894e]  py-24 rounded-xl ">
                <h2 className="text-6xl font-bold text-green-500  py-8"> Spreading Kindness in the Cold</h2>
                <p className="font-bold text-white text-xl mx-16 ,  py-6 rounded-2xl  ">Winter Warmth is a heartfelt initiative aimed at providing winter clothing to those in need across Bangladesh. By donating essentials like blankets and jackets, you can help vulnerable communities stay warm and safe during harsh winters. Together, let’s bring comfort, hope, and warmth to countless lives this season.</p>

                <Link to={'donation'} className="btn btn-secondary px-12 font-bold">Donate Now </Link>
                </div>
                <button
                    className="btn btn-circle"
                    onClick={() =>
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
                    }
                >
                    ❯
                </button>
            </div>

      
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`btn btn-xs ${currentIndex === index ? "bg-warning" : "bg-gray-300"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
