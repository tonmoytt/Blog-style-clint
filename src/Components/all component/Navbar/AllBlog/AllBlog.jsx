import { useLoaderData } from "react-router-dom";
import ShowData from "./ShowData";
import {  FaSearch } from 'react-icons/fa';

 

const AllBlog = () => {
     
const loader=useLoaderData()
console.log(loader);
    

    return (
        <div className="mt-10">
            <div className='flex mb-4 items-center justify-center'>
                    <input type="text" placeholder="Search here" className=" w-9/12 px-4  py-1 bg-gray-200 input-bordered " />
                    <div className=' bg-orange-300 ml-1 px-2 py-2 rounded-md'>
                        {
                            <FaSearch></FaSearch>
                        }
                    </div>
                </div>
            <div className="border-2 grid md:grid-cols-3">
                {
                    loader.map(data =><ShowData key={data.title} data={data}></ShowData>)
                }
            </div>
            
        </div>
    );
};

export default AllBlog;