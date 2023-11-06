import { FaFacebook, FaGoogle, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-4 justify-start py-6 mb-6 border md:items-center'>
                <div>
                    <h1 className='text-cyan-300 text-2xl pl-3 font-bold'>FitLife-<span className='text-orange-400 font-bold'>Insights</span> </h1>
                </div>

                <div className='flex items-center justify-center'>
                    <input type="text" placeholder="Search here" className=" w-9/12 px-4  py-1 bg-gray-200 input-bordered " />
                    <div className=' bg-orange-300 ml-1 px-2 py-2 rounded-md'>
                        {
                            <FaSearch></FaSearch>
                        }
                    </div>
                </div>
                <div className='flex gap-4 justify-center ml-1 md:ml-20 lg:ml-60  '>
                    {
                        <FaFacebook></FaFacebook>
                    }
                    {
                        <FaTwitter></FaTwitter>
                    }
                    {
                        <FaGoogle></FaGoogle>
                    }
                    {
                        <FaYoutube></FaYoutube>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;