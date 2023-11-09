import { useLoaderData } from "react-router-dom";
// import ShowFeaturedata from "./ShowFeaturedata";
// import { useState } from "react";



const Feature = () => {

    const loderFeatures = useLoaderData()
    console.log(loderFeatures)

    const sortBlogs = loderFeatures.slice().sort((a, b) => b.description?.length - a.description?.length)
    console.log(sortBlogs);

    // const array = [ {desc: "1234"}, {desc: "123456789"}, {desc: "123456"},{desc: "123"}];
    // const sortedArray = array.slice().sort((a, b) => b.desc.length - a.desc.length);
    // console.log("sortedArray", sortedArray);

    return (
        <div className="mt-10">
            <p className="text-yellow-300 mb-4 bg-black mx-40 text-4xl font-serif font-bold text-center">This is Your Feature Post</p>
            {sortBlogs.slice(0, 10).map(blog => <div className="px-4 md:px-40" key={blog._id}>
                <div className="border-2 p-4 ">
                    <img className="w-full h-80 rounded-md" src={blog?.image} alt="" />
                    <p className="text-2xl font-bold mt-2">{blog?.title}</p>
                    <p className="text-sm mt-2">{blog?.description}</p>
                    <p className="mt-4 mb-10 font-semibold text-xl  text-indigo-400">{blog?.category}</p>
                </div>
            </div>)}

        </div>
    );
};

export default Feature;