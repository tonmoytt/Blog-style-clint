import { Link } from "react-router-dom";



const ShowData = ({ Propsdata }) => {
    const { title, image, description } = Propsdata;
    return (
        <div className="border-2 p-4">

            <img className="w-full h-60 rounded-md" src={image} alt="" />
            <p className="text-2xl font-bold mt-2">{title}</p>
            <p className="mt-2">{description}</p>
            <div className="mt-6 card-actions justify-between">
                <Link><button className="btn btn-primary ">DETAILS</button></Link>
                <Link><button className="btn btn-secondary">wishlist</button></Link>
            </div>
        </div>
    );
};

export default ShowData;