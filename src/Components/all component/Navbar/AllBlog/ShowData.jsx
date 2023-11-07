import { Link } from "react-router-dom";



const ShowData = ({ data }) => {
    const { _id, title, image, description } = data;

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
                alert('mamu kam hogaya')
            })
    }
    return (
        <div className="border-2 p-4 ">

            <img className="w-full h-60 rounded-md" src={image} alt="" />
            <p className="text-2xl font-bold mt-2">{title}</p>
            

            {
                description.length > 150 ?
                    <p>{description.slice(0,150)} <Link to={`/featured/${_id}`} className="text-blue-500 font-bold">Read more</Link></p>
                    :
                    <p className="mt-2">{description}</p>
            }
            <div className="mt-6 card-actions justify-between">
                <Link to={`/details/${_id}`}><button className="btn btn-primary ">DETAILS</button></Link>
                <Link to={`/wishlist/${_id}`}><button onClick={hendelwishlistadd} className="btn btn-secondary">wishlist</button></Link>
            </div>
        </div>
    );
};

export default ShowData;