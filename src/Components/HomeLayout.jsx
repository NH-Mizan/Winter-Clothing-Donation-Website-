import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";

import About from "./About";
import HowToHelp from "./HowToHelp";
import { useEffect } from "react";



const HomeLayout = () => {
    const data = useLoaderData()
    useEffect(()=>{
        document.title= 'Home || Winter Warmth'
    },[])


    return (
        <div>

            <Banner></Banner>
            <Outlet></Outlet>
            <About></About>
            <HowToHelp></HowToHelp>


        </div>
    );
};

export default HomeLayout;