import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgetPass = () => {
  
    const { forgetProvider } = useContext(AuthContext)
    const handleForgetPassword = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get("email")
        toast.success('Thank you! Forgeting Your Password Please Check Email.',);
        forgetProvider(email)
        .then(()=>{

                // Password reset email sent!
                
        })
        .catch(error =>{
            console.log(error)
        });


  
    }
    return (
        <div>
            <div className="bg-base-200 min-h-screen flex justify-center items-center">


                <div className="card bg-base-100 w-full max-w-lg py-12 shrink-0 shadow-2xl">
                    <h2 className="text-3xl font-bold text-center "> Forget password Now !!</h2>
                    <form onSubmit={handleForgetPassword} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>




                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Forget Now</button>
                        </div>

                    </form>


                </div>
            </div>

        </div>
    );
};

export default ForgetPass;