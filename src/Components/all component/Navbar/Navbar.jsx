import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthConnect } from "../../AUthProvider/AUthProvider";
import swal from "sweetalert";
import img from './../../../assets/img/loginuser.png'


const Navbar = () => {
    const { user, Signout } = useContext(AuthConnect)
    const navlink = <>
        <div className=" flex items-center">


            <li className="mr-4 font-semibold text-white text-xl hover:underline hover:font-bold "><NavLink to="/">Home</NavLink></li>
            <li className="mr-4 font-semibold text-white text-xl hover:underline hover:font-bold"><NavLink to="/addblog">Add Blog</NavLink></li>


            {/* <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <li>
                        <details>
                            <summary className="font-semibold text-white text-xl hover:underline hover:font-bold">
                                Popular Post
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li className="font-semibold text-lg hover:underline hover:font-bold"><Link to='/china'><button>China</button></Link></li>
                                <li className="font-semibold text-lg hover:underline hover:font-bold"><Link to='/amazon'><button>Amazon </button></Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div> */}



            <li className="mr-4 font-semibold text-white text-xl hover:underline hover:font-bold"><NavLink to="/allblog">All Blog</NavLink></li>
            <li className="mr-4 font-semibold text-white text-xl hover:underline hover:font-bold"><NavLink to="/featured">Featured Post</NavLink></li>
            <li className="mr-4 font-semibold text-white text-xl hover:underline hover:font-bold"><NavLink to="/wishlist">Wishlist</NavLink></li>
{
    user?
     <></>
    :
    <li className="mr-4 font-semibold text-white text-xl hover:underline hover:font-bold"><NavLink to="/login">Login</NavLink></li>
}
        </div>
    </>
    const signout = () => {
        Signout()
            .then(result => {
                console.log(result.user);
                swal("SignOUT!", "successfully Signout", "success");

            })
            .catch(error => {
                console.error(error)

            })
    }
    return (
        <div className="px-6 bg-red-600">
            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-300 rounded-box w-96">
                            {
                                navlink
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl md:text-3xl lg:text-3xl text-white">Blogs</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navlink
                        }
                    </ul>
                </div>
                <div className="navbar-end  ">


                    {
                        user ? <>

                            {user.image}
                            <span className="grid">
                                <span className="text-white">{user.email}  </span> <button onClick={signout} className=" btn text-lg btn-outline btn-secondary
             ">SignOut</button>
                            </span>
                        </>
                            :
                            <>
                                <img className="w-14 rounded-full pr-2 " src={img} alt="" />
                                <Link to="/registration"><button className="btn text-lg btn-outline btn-secondary">Register</button></Link>
                            </>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;


