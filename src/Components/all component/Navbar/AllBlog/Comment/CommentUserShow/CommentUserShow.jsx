import { useEffect, useState } from "react";
import SShowcomment from "./SShowcomment";



const CommentUserShow = () => {
    const [commentdata, setcommentdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/comment')
            .then(res => res.json())
            .then(data => setcommentdata(data))
    }, [])



   
    return (
        <div>
            <hr />
            <p className="mt-10 mb-2 text-purple-500 text-lg underline">User feedback</p>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    commentdata.map(data => <SShowcomment key={data._id} data={data}></SShowcomment> )
                }
            </div>
        </div>
    );
};

export default CommentUserShow;