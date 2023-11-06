import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
           <div className='mb-6 bg-orange-100 '>
            <hr className='w-full mb-2 bg-red-600 text-red-600' />
            <hr className='w-full mb-2 text-red-600' />
            <hr className='w-full mb-2 text-red-600' />
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/t2q0qmD/2b8d775b57ef8a1c2ab207923d80aabf.jpg)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="mr-10 md:mr-72 lg:mr-90 hero-conte text-neutr-content">
                    <div className="mr-10 md:mr-40 lg:mr-96 px-6 py-6 ">
                        
                        <h1 className="text-2xl md:text-4xl lg:text-4xl font-serif font-bold mb-10"> <span className="text-teal-300 font-extrabold md:text-7xl "> Stay curious. </span> 
                        </h1>
                        <p className="mb-5 text-white font-semibold">Discover stories, thinking, and expertise from writers on any topic.</p>
                        <Link to="/login"><button className="btn font-semibold mt-6 btn-secondary">Start Reading</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;