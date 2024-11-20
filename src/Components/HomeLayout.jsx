import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";

import About from "./About";
import HowToHelp from "./HowToHelp";
import { useEffect } from "react";
import HowtoWork from "./HowtoWork";
import WhyYourHelpMatters from "./WhyYourHelpMatters";
import WithYOurSupport from "./WithYOurSupport";



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
            <HowtoWork></HowtoWork>
            <WithYOurSupport></WithYOurSupport>
            <WhyYourHelpMatters></WhyYourHelpMatters>


        </div>
    );
};

export default HomeLayout;