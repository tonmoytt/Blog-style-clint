import swal from "sweetalert";

const Comment = () => {

    const hendelcomment = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const comment = form.comment.value
        const user = { name, comment }
        console.log(user);



    }



    const hendeladdcomment = () => {
        fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                swal("succesfully added wishlist", "check wishlist and confirm", "success")
            })

    }



    return (
        <div>
            <div >
                <form onSubmit={hendelcomment}>
                    <div className="grid items-center">


                        <input type="text" name="name" placeholder="Your name" required className="input input-bordered input-sm w-full max-w-xs" />
                        <textarea placeholder="Your comment" name="comment" required className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
                        <button onClick={hendeladdcomment} className="btn btn-primary"> <input type="submit" value="Submit" /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comment;