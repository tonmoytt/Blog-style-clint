import swal from "sweetalert";

const Comment = () => {

    const hendelcomment = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const comment = form.comment.value
        const user = { name, comment }
        console.log(user);

        fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                swal("succesfully added wishlist", "check wishlist and confirm", "success")
            })

    }



    // const hendeladdcomment = () => {
        

    // }



    return (
        <div  >
            <div className="mx-30">
                <form onSubmit={hendelcomment}>
                    <div className="grid gap-3 items-center">


                        <input type="text" name="name" placeholder="Your name" required className="input input-bordered text-center input-sm w-1/2 " />
                        <textarea placeholder="Your comment" name="comment" required className="textarea textarea-bordered textarea-sm w-1/2" ></textarea>
                        <button  className="btn w-1/2 btn-primary"> <input type="submit" value="Submit" /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comment;