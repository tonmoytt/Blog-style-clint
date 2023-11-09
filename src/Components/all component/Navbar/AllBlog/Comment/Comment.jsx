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
                swal("comment successful ", " .", "success")
            })

    }



    // const hendeladdcomment = () => {
        

    // }



    return (
        <div  >
            <div className="mx-30">
                <p className="text-lg mb-4 text-violet-400 font-semibold ">Comment here :</p>
                <form onSubmit={hendelcomment}>
                    <div className="grid gap-3 items-center">


                    <input type="text" placeholder="Your name" name="name" className="input input-bordered input-warning w-full max-w-xs" />
                        <textarea className="textarea w-3/4 textarea-secondary" name="comment" placeholder="Comment here"></textarea>
                        <button  className="btn w-1/3 btn-primary"> <input type="submit" value="Submit" /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comment;