import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

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

        </div>
    </>

    return (
        <div>
            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navlink
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl text-white">Blogs</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navlink
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


<div className="navbar-end  ">

    <button className="text-white ">Login</button>
    {/* {
    user ? <>


  <span className="grid">
  <span className="text-white">{user.email} </span>    <button onClick={signout} className=" 
                 btn text-lg btn-outline btn-secondary
                 ">SignOut</button>
  </span>
  </>
        :
        <Link to="/login"><button className="btn text-lg btn-outline btn-secondary">Appointment</button></Link>
} */}


</div>