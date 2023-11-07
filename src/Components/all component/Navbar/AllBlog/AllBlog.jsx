import { useLoaderData } from "react-router-dom";
import ShowData from "./ShowData";
import {  FaSearch } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";

 

const AllBlog = () => {
     
const loader=useLoaderData()
// console.log(loader);

const [searchText, setSearchText] = useState("");
const [displayedBlog, setDisplayedBlog] = useState(loader);

useEffect(() => {
    setDisplayedBlog(loader)
}, [])

const handleSearch = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const search = form.search.value;
   
    if(search == ""){
        setDisplayedBlog(loader);
        return
    }
    setSearchText(search);
    const filteredData = displayedBlog?.filter(blog => blog.title.includes(searchText));
    setDisplayedBlog(filteredData)
}
console.log(displayedBlog);
    
console.log(searchText);
    return (
        <div className="mt-10">
            <div className='flex mb-4 items-center justify-center'>
                    <form onSubmit={handleSearch}>
                        <div className="flex">
     
                    <input name="search" type="text" placeholder="Search here" className=" w-9/12 px-4  py-1 bg-gray-200 input-bordered " />
                    <div className=' bg-orange-300 ml-1 px-2 py-2 rounded-md'>
                        <button type="submit"><FaSearch></FaSearch></button>
                        </div>
                    </div>
                    </form>
                </div>
            <div className="border-2 grid md:grid-cols-3">
                {
                    displayedBlog?.map((data, index) =><ShowData key={data._id + index} data={data}></ShowData>)
                }
            </div>
            
        </div>
    );
};

export default AllBlog;