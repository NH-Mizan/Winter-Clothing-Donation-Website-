import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DonationLayout from "../Allpage/DonationLayout";



const HomeLayout = () => {
    const data = useLoaderData()

    return (
        <div>

            <Banner></Banner>
            <Outlet></Outlet>


            <div className="text-center py-12">
                <h2 className="text-3xl mb-4 font-bold ">Donation Campaigns</h2>
                <p className="text-gray-400 font-bold">Help provide winter essentials like blankets, jackets, and food to vulnerable communities and bring comfort during harsh winters.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 w-11/12 mx-auto">
                {
                    data.map((card, i) => <DonationLayout key={i} card={card}></DonationLayout>)
                }
            </div>

        </div>
    );
};

export default HomeLayout;