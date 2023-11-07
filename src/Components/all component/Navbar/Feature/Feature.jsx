import { useLoaderData, useParams } from "react-router-dom";
// import ShowFeaturedata from "./ShowFeaturedata";
import { useState } from "react";



const Feature = () => {
    // const { id } = useParams();
    // console.log(id);
    // const loderFeatures = useLoaderData()
    // console.log(loderFeatures);
    // const [data,setdata]=useState()
    // console.log(data);
    // const Searchdata=loderFeatures?.find(info => info._id===id)
    // setdata(Searchdata)
    return (
        <div>
            <p>this is feature</p>
            {/* <p>{data?.id}</p>
            <p>{data?.title}</p> */}
           
        </div>
    );
};

export default Feature;