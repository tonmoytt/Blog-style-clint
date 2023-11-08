

const Showdatawishlist = ({ propswishlist, }) => {
    const { _id, image, title, description } = propswishlist;
   
    return (
        <div>
            {/* <p>amr bap er id {_id}</p>
            <p>title: {title}</p> */}
            <div className="border-2 p-4 ">

                <img className="w-full h-80 rounded-md" src={image} alt="" />
                <p className="text-2xl font-bold mt-2">{title}</p>
                <p className="text-sm mt-2">{description}</p>
                <button  className="btn btn-outline btn-secondary mt-4 w-full text-center">Remove from wishlist</button>


            </div>
        </div>
    );
};

export default Showdatawishlist;


// const [dataloder, setdataloder] = useState([]);
//     console.log(dataloder);

//     useEffect(() => {
//         fetch('http://localhost:5000/wishlist')
//             .then(res => res.json())
//             .then(data => setdataloder(data))
//     }, [])




    // const hendeldlete = id => {
    //     const procesd = confirm('are you sure?')
    //     if (procesd)
    //         console.log('ho vai kam krissci');
    //     fetch(`http://localhost:5000/wishlist/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(datas => {
    //             console.log(datas);
    //             if (datas.deletedCount > 0) {
    //                 alert('deleted succfull')
    //                 const remining = dataloder.filter(datas => datas._id !== id)
    //                 setdataloder(remining);
    //             }
    //         })
    // }