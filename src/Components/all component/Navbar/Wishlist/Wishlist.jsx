import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Showdatawishlist from "./Showdatawishlist";


const Wishlist = () => {
    const loder=useLoaderData( )
    console.log(loder);
    // const [data,setdata]=useState()
    // console.log(data);
    // const [data,setdata]=useState();
    // useEffect(()=>{
    //     fetch('http://localhost:5000/wishlist')
    // },[])
    // const findloader = loder?.find(data => data._id === id)
    // console.log(findloader);
    return (
        <div>
            <p>nai {loder.length}</p>
            <div>
                {
loder?.map(data =><Showdatawishlist key={data._id} propswishlist={data}></Showdatawishlist>)
                }
            </div>
        </div>
    );
};

export default Wishlist;