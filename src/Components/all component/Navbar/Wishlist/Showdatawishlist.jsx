

const Showdatawishlist = ({ propswishlist }) => {
    const { _id, image, title,description } = propswishlist;
    return (
        <div>
            {/* <p>amr bap er id {_id}</p>
            <p>title: {title}</p> */}
            <div className="border-2 p-4 ">

                <img className="w-full h-80 rounded-md" src={image} alt="" />
                <p className="text-2xl font-bold mt-2">{title}</p>
                <p className="text-sm mt-2">{description}</p>


            </div>
        </div>
    );
};

export default Showdatawishlist;


