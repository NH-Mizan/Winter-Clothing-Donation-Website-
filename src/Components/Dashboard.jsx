import { useContext, useEffect } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Dashboard = () => {

    useEffect(() => {
        document.title = 'Dashboard || Winter Warmth'
    }, [])
    const { user } = useContext(AuthContext)




    return (
        <div className="min-h-screen  w-11/12 mx-auto">
     
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/dBQJyTR/banner3.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content  p-12 rounded-xl flex flex-col lg:flex-row md:flex-row gap-12 bg-lime-200 text-center">
                    <div className=""><img src={user.photoURL} alt="" className="rounded-lg h-80 w-80"/></div>
                    <div className="max-w-md">
                        
                        <p className="mb-5 flex gap-4 text-xl font-bold">
                        User Name: <p className="text-blue-500">{user.displayName}</p>
                        </p>
                        <p className="mb-5 flex gap-4 text-xl font-bold">
                           Email Address: <p className="text-red-300">{user.email}</p>
                        </p>
                        <div className="mb-5 flex gap-4 text-xl font-bold">
                        PhotoURL:  <p className="text-red-300 text-lg ">{user.photoURL}</p>
                        </div>
                       
                        <Link to={'/updeteprofile'} className="btn btn-outline font-bold mt-8 btn-primary">Update Profile</Link>
                    </div>
                </div>
            </div>


            
        </div>


    );
}


export default Dashboard;