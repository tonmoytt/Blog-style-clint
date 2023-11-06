import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white ">
                <div className="grid md:flex lg:flex text-base lg:text-2xl justify-around  text-white pt-10 md:pt-16 lg:pt-20 ">
                    <h1 className="font-serif p-4  font-semibold text-red-300">Talk to <Link to="/login"><button className="text-emerald-300 hover:text-xl hover:bg-red-600">Elolving Electroics</button></Link> company about more information<br />"Your car's" which you want</h1>
                    <div className="mr-4">
                        <div className="px-3 grid gap-4">
                            <input className="  mb-2 border pl-2" type="text" placeholder="Name" />
                            <input className="  mb-3 pl-2" type="text" placeholder="Email address" />
                        </div>
                        <button className=" px-4 ml-5  py-1 rounded-lg  bg-red-200">Submit</button>
                    </div>

                </div>
                <div className="grid md:flex lg:flex justify-around w-3/4">


                    <p className="mt-20  pb-2"><small>@2023 All right Reserv by Tonmoy</small> </p>
                    <span className=" mt-6 md:mt-20 pl-8 md:pl-16 lg:pl-28 pb-2 flex gap-6">

                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaLinkedinIn></FaLinkedinIn>
                        <FaYoutube></FaYoutube>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;