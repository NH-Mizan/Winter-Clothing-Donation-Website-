import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const { userLogin, setUser, handleGooleSinIn, } = useContext(AuthContext)
    const [error, setError] = useState({})
    const [show, setShow] = useState(false)
    const location = useLocation();
    const navigate = useNavigate()




    const handleLoginBtn = (e) => {
        e.preventDefault()


        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        userLogin(email, password)
            .then(res => {
                const user = res.user;
                setUser(user)
                navigate(location?.state ? location.state : "/")
            })
            .catch((erro) => {
                setError({ ...error, login: erro.code })

            });
    }
    const handleGooleSinInBtn = () => {
        handleGooleSinIn()
            .then(res => {
                const user = (res.user)
                setUser(user)
                navigate(location?.state ? location.state : "/")
            })
            .catch((erro) => {
                setError({ ...error, login: erro.code })
            });

    }

    return (
        <div>
            <div className="bg-base-200 min-h-screen flex justify-center items-center">


                <div className="card bg-base-100 w-full max-w-lg py-12 shrink-0 shadow-2xl">
                    <h2 className="text-3xl font-bold text-center ">Welcome Back Login Now !!</h2>
                    <form onSubmit={handleLoginBtn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'}
                                name='password' placeholder="password" className="input input-bordered" required />

                            <button type='button' onClick={() => setShow(!show)} className="btn btn-xs absolute right-4 top-12">{
                                show ? <FaEyeSlash/> : <FaEye />
                            } </button>
                            {
                                error.login &&
                                <label className="label text-red-500 font-bold">{error.login}</label>


                            }
                            <label className="label">

                                <Link to={'/forget'} className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button type='button' onClick={handleGooleSinInBtn} className='btn btn-primary btn-outline mt-4'><FcGoogle className='text-xl' /> Google Login Now </button>
                    </form>

                    <p className=" text-center"> Don’t have an account? <Link to={'/register'} className='text-red-500 font-bold'>Register Here </Link> </p>
                </div>
            </div>

        </div>
    );
};

export default Login;