
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="bg-lime-300 stiky top-0">
            <div className="navbar w-11/12 mx-auto itrms-center flex ">
                <div className="navbar-start">
                   
                    <img src="https://i.ibb.co.com/QKMf80s/images.png" alt="" className="lg:w-20 w-14 rounded-lg" />
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to={'/'}> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/donation'}>Donation Campaigns </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/help'}> How to Help</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard'}> Dashboard</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4 text-xl font-bold">

                        <li>
                            <NavLink to={'/'}> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/donation'}>Donation Campaigns </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/help'}> How to Help</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard'}> Dashboard</NavLink>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="font-bold mr-4 "> { <div ><img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                      </div>} </div>
                    {
                         user?.email ? (
                            <button onClick={logOut} className="btn btn-neutral font-bold  ">Log Out</button>
                        ) : (
                            <Link to={'/login'} className="btn btn-neutral font-bold ">Login</Link>
                        )
                    }
                </div>
              
            </div>

        </div>
    );
};

export default Header;