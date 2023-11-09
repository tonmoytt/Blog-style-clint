/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import swal from "sweetalert";


const ShowData = ({ data }) => {
    const { _id, title, image,category, description } = data;

    const hendelwishlistadd = () => {
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
                swal("succesfully added wishlist","check wishlist and confirm","success")
            })
    }
    return (
        <div className="border-2 p-4 ">

            <img className="w-full h-60 rounded-md" src={image} alt="" />
            <p className="text-2xl font-bold mt-2">{title}</p>
            
 
                    <p className="mt-2">{description}</p>
                    <p className="mt-4 mb-10 font-semibold text-xl  text-indigo-400">{category}</p>
            
            <div className="mt-6 card-actions justify-between">
                <Link to={`/details/${_id}`}><button className="btn btn-primary ">DETAILS</button></Link>
                <Link to={`/wishlist/${_id}`}><button onClick={hendelwishlistadd} className="btn btn-secondary">wishlist</button></Link>
            </div>
        </div>
    );
};

export default ShowData;