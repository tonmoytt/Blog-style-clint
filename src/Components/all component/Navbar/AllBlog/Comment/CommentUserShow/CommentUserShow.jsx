import { useEffect, useState } from "react";

 

const CommentUserShow = () => {
    const [commentdata,setcommentdata]=useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/comment')
        .then(res => res.json())
        .then(data =>setcommentdata(data))
    },[])
    return (
        <div>
            <p>abul : {commentdata.length}</p>
            <div className="grid md:grid-cols-3 ">
                {
                    commentdata.map(data => <div className="border-2" key={data._id} data={data}> 
                    <p className="text-2xl font-serif font-bold">paici mama : {data.name}</p>
                    <p>paici mama : {data.comment}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CommentUserShow;