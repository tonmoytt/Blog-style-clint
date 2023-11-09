import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const Post = () => {

    const [newPost, setNewPost] = useState([])
    console.log(newPost);

    const loder = useLoaderData()
    console.log(loder);

    useEffect(() => {
        // Fetch all blogs
        // fetch('http://localhost:5000/users')
        //   .then((res) => res.json())
        //   .then((data) => );
        // Sort the blogs by date
        const sortedBlogs = loder.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
        setNewPost(sortedBlogs);
        //  
    }, []);

    return (
        <div>
            <div className="bg-blue-500">
                <p className="text-4xl  mx-10 text-center bg-rose-200 font-bold font-serif my-2">Latest Blog</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-8">

                {  // map from state(newPost).slice(0, 6).map() and display data
                    loder.slice(0, 6).map(data => <div key={data._id} data={data}
                        className="border-2 p-4">
                        <img className="w-full" src={data.image} alt="" />
                        <p className="text-2xl font-bold font-serif my-2">{data.title}</p>
                        <p >{data.description}</p>
                        <div className="mt-6  justify-between">
                            <Link to={`/details/${data._id}`}><button className="btn btn-primary w-full ">DETAILS</button></Link>
                             
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Post;