import { useLoaderData } from "react-router-dom";
import ShowData from "./ShowData";


 

const AllBlog = () => {
     
const loader=useLoaderData()
console.log(loader);
    

    return (
        <div>
            <p>ho re vai {loader.length}</p>
            <div className="border-2 grid md:grid-cols-3">
                {
                    loader.map(data =><ShowData key={data._id} Propsdata={data}></ShowData>)
                }
            </div>
            
        </div>
    );
};

export default AllBlog;