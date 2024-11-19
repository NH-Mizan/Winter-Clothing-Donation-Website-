import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DonationLayout from "../Allpage/DonationLayout";
import About from "./About";
import HowToHelp from "./HowToHelp";



const HomeLayout = () => {
    const data = useLoaderData()

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