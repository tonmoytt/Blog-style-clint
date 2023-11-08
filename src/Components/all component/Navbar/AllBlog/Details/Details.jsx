import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import Comment from "../Comment/Comment";
import CommentUserShow from "../Comment/CommentUserShow/CommentUserShow";



const Details = () => {
    const [data, setdata] = useState([])
    const { id } = useParams()
    console.log(id);
    const loaderData = useLoaderData()
    console.log(loaderData);

    console.log(data);


    useEffect(() => {
        const findloader = loaderData.find(data => data._id == id)

        setdata(findloader);
    }, [setdata])



    const detialswishlistadd = () => {
        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                swal("succesfully added wishlist", "check wishlist and confirm", "success")
            })

    }

    return (
        <div>

            <div className="text-center mt-6 mx-40">
                <div className="card w-full bg-base-100 border-4 p-2 text-center  shadow-xl">
                    <figure><img className='max-h-[600px] w-full rounded-lg' src={data?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">   {data?.title} </h2>
                        <p className="">   {data?.description} </p>

                        <div className="   mt-6  ">

                            <Link>  <button onClick={detialswishlistadd} className="btn btn-warning w-full">Wishlist</button>
                            </Link>
                        </div>
                    </div>
                </div>
                 
            </div>
            <div className=" mt-10 px-40">
                <CommentUserShow></CommentUserShow>
               
            </div>
            <div className=" mt-10 px-20">
            <hr />
            <div className="mt-10">
            <Comment></Comment>
            </div>
            
            </div>
            
        </div>
    );
};

export default Details;














