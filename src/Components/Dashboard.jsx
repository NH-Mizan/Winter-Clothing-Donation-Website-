import { useContext, useEffect } from "react";

import { AuthContext } from "../Provider/AuthProvider";


const Dashboard = () => {

    useEffect(() => {
        document.title = 'Dashboard || Winter Warmth'
    }, [])
    const { user, updateUserDashboard, } = useContext(AuthContext)

    const handleupdateBtn = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const photourl = form.get("photo")



        updateUserDashboard({ displayName: name, photoURL: photourl }).then(() => {
           
          
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    }
    return (
        <div className="min-h-screen lg:flex gap-20 items-center w-11/12 mx-auto">
            <div className="card bg-base-300 w-full max-w-lg py-12 p-12 shadow-2xl">
                <img src={user.photoURL} alt="" className="w-60 rounded-full  h-60  " />
                <h2 className="text-4xl font-bold text-center py-12">My Profile</h2>

                <div className="flex text-xl gap-12">
                    <h2 className="font-bold">User Name :</h2> {user?.displayName}
                </div>


                <div className="flex text-xl  gap-12">
                    <h2 className="font-bold">Email Address :</h2> {user?.email}
                </div>


                <div className="flex gap-12 mt-4">
                    <h2 className="font-bold text-xl">Photo Url:</h2>
                    <h2 className="text-md">{user.photoURL}</h2>
                </div>

            </div>
            <div className="card bg-base-100 w-full max-w-lg py-12 shrink-0 shadow-2xl">
            <h2 className="text-4xl font-bold text-center py-12">Update Profile</h2>

                <form onSubmit={handleupdateBtn} className="card-body">
                    <label className="input input-bordered flex items-center my-4 gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" name='name' className="grow" placeholder="Username" />
                    </label>
                    <label className="input input-bordered flex items-center my-4 gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" name='photo' className="grow" placeholder="Photo URL" />
                    </label>
                    <button className='btn btn-info'>Update Now </button>
                </form>
            </div>

        </div>
    );
};

export default Dashboard;