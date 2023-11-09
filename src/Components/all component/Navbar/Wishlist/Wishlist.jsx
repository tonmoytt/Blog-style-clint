
import { useLoaderData } from "react-router-dom";
import Showdatawishlist from "./Showdatawishlist";


const Wishlist = () => {
    const loder = useLoaderData()
    console.log(loder);
    
    const handleDeleteClick = (id) => {
        console.log(id);
        const procesd = confirm('are you sure?')
        if (procesd)
            console.log('ho vai kam krissci');
        fetch(`http://localhost:5000/wishlist/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(datas => {
                console.log(datas);
                if (datas.deletedCount > 0) {
                    alert('deleted succfull')
                    // const remining = dataloder.filter(datas => datas._id !== id)
                    // setdataloder(remining);
                }
            })
    }

    return (
        <div>
            <p className="text-4xl font-bold text-center my-6 text-teal-300">This is Your Wish List</p>
            <div className="grid md:grid-cols-3">
                {
                    loder?.map(data => <Showdatawishlist key={data._id} handleDeleteClick={handleDeleteClick} propswishlist={data}></Showdatawishlist>)
                }
            </div>
        </div>
    );
};

export default Wishlist;