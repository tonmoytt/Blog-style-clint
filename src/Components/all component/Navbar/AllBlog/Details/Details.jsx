import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";



const Details = () => {
    const { id } = useParams()
    console.log(id);
    const loaderData = useLoaderData()
    console.log(loaderData);
    const [data,setdata]=useState()
    console.log(data);

    const findloader = loaderData?.find(data => data._id === id)
    console.log(findloader);

    const detialswishlistadd=() =>{
        fetch('http://localhost:5000/wishlist',{
            method:'POST',
            headers:{
                'context-type' : 'application/json'
            },
            body:JSON.stringify()
           })
           .then(res =>res.json())
           .then(data =>{
            console.log(data);
            swal("succesfully added wishlist","check wishlist and confirm","success")
           })
        
    }
     
    return (
        <div>

            
            <div className="text-center mt-6 mx-40">
                <div className="card w-full bg-base-100 border-4 p-2 text-center  shadow-xl">
                    <figure><img className='max-h-[600px] w-full rounded-lg' src={findloader?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">   {findloader?.title} </h2>
                        <p className="">   {findloader?.description} </p>

                        <div className="   mt-6  ">
 
                            <Link>  <button onClick={detialswishlistadd} className="btn btn-warning w-full">Wishlist</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;