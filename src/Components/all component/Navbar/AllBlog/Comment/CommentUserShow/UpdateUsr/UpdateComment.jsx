
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

 

const UpdateComment = () => {
const loderData=useLoaderData();
console.log(loderData);

    const hendelUpdate = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const comment = form.comment.value
        const user = { name,comment }
        console.log(user);
        fetch(`http://localhost:5000/updateComment/${loderData._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                swal("Comment Updated Successfully.")
            }
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <div className="mx-30">
                <p className="text-lg mb-4 text-violet-400 font-semibold ">Comment here :</p>
                <form onSubmit={hendelUpdate}>
                    <div className="grid gap-3 items-center">


                    <input type="text" placeholder="Your name" name="name" defaultValue={loderData?.name}  className="input input-bordered input-warning w-full max-w-xs" />
                        <textarea className="textarea w-3/4 textarea-secondary" defaultValue={loderData?.comment}  name="comment" placeholder="Comment here"></textarea>
                        <button  className="btn w-1/3 btn-primary"> <input type="submit" value="Submit" /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateComment;