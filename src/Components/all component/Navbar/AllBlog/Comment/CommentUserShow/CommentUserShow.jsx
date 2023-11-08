import { useEffect, useState } from "react";
import img from './../../../../../../assets/img/uuuuuuuu.jpg'


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
                    commentdata.map(data => <div className="border-2 p-4 " key={data._id} data={data}>
                        <div className="flex">
                            <div>
                                <img className="h-12 w-12 mr-10" src={img} alt="" />
                            </div>
                            <div>
                                <p className="text-2xl font-serif font-bold">Your Name : {data.name}</p>
                                <p>Your comment : {data.comment}</p>
                            </div>

                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default CommentUserShow;