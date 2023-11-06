import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white ">
                <div className="grid  text-center text-base lg:text-2xl justify-around  text-white pt-10 md:pt-16 lg:pt-20 ">
                    <h1 className="font-serif p-4 text-4xl  font-semibold text-red-300"> Foolish developer</h1>
                    <p className='text-sm'>
                    "Our blog is a hub of knowledge, creativity, and inspiration. Explore a world of insightful articles, engaging content, and valuable resources. <br />Stay connected with us on social media, and don't hesitate to reach out with any questions or suggestions. <br /> Your journey through our blog begins at the footer, where you'll find everything you need for a seamless and enriching experience."
                    </p>
                    {/* <div className="mr-4">
                        <div className="px-3 grid gap-4">
                            <input className="  mb-2 border pl-2" type="text" placeholder="Name" />
                            <input className="  mb-3 pl-2" type="text" placeholder="Email address" />
                        </div>
                        <button className=" px-4 ml-5  py-1 rounded-lg  bg-red-200">Submit</button>
                    </div> */}

                </div>
                <div className="grid md:flex lg:flex justify-between w-full md:px-20">


                    <p className="mt-20   pb-2"><small>@2023 All right Reserv by Tonmoy</small> </p>
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