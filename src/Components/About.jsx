import React from "react";

const About = () => {
    return (
        <section className="bg-gray-100 py-12 ">
            <div className="container mx-auto text-center w-11/12 ">
                <h2 className="text-4xl font-bold text-primary ">
                    Our Mission
                </h2>
                <p className="text-lg font-bold py-8 text-gray-700 mb-6">
                    Bringing warmth to vulnerable communities in Bangladesh
                </p>
                <div className="flex flex-col md:flex-row lg:flex-row lg:jstify-between gap-8 items-center ">
                    <img src="https://i.ibb.co.com/pwSWJgp/weater-02.jpg" alt="" className="w-[500px] rounded-xl"/>
                <p className="text-lg text-left  text-gray-700 mb-8">
                    Winter Warmth is a compassionate initiative dedicated to supporting vulnerable communities across Bangladesh during the harsh winter months. Thousands of people, especially in rural and low-income areas, struggle to stay warm due to the lack of proper winter clothing and resources. Our mission is to connect generous donors with these communities through an easy-to-use platform, ensuring timely distribution of essential items like blankets, jackets, and sweaters.

                    By bridging the gap between those who want to help and those in need, Winter Warmth aims to bring comfort, hope, and protection to countless lives. Together, we can make a difference—one warm heart at a time.
                </p>
                </div>
                <button className="btn btn-primary btn-wide">
                    Learn How to Contribute
                </button>
            </div>
        </section>
    );
};

export default About;
