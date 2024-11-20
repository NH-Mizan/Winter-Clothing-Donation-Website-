import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const { updateUserDashboard } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleupdateBtn = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const photourl = form.get("photo")



        updateUserDashboard({ displayName: name, photoURL: photourl }).then(() => {

            navigate('/dashboard')
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div>
            <div className="bg-base-200 min-h-screen flex justify-center items-center">
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
                            <input type="text" name='name' className="grow" placeholder="Username" required/>
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
                            <input type="text" name='photo' className="grow" placeholder="Photo URL" required/>
                        </label>
                        <button className='btn btn-info'>Update Now </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;