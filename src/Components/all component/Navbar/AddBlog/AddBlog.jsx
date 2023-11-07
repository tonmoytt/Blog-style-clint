import swal from "sweetalert";


const AddBlog = () => {
    const Hendelclick = event => {
        event.preventDefault()
        const form = event.target;
        const image = form.image.value
        const category = form.category.value
        const title = form.title.value
        const description = form.description.value
        const date = form.date.value
        const time = form.time.value
        const user = { image, category, title, description, date, time }
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("succesfully added to all blog","check Blog list ","success")
                }
            })
    }
    return (
        <div>
            <form onSubmit={Hendelclick}>

                <div className="text-center pb-10">
                    <div className="bg-gray-200 mt-10 md:px-10 md:pt-20 py-2">
                        <input className="border-1 mr-4 w-1/3 md:px-4 py-2 rounded-lg" type="text" name="image" id="" placeholder="Photo Url" />
                        <input className="border-1 w-1/3  px-4 py-2 rounded-lg" type="text" name="category" placeholder=" category" id="" />
                    </div>

                    <div className="bg-gray-200  md:px-10  py-2">
                        <input className="border-1 mr-4 w-1/3 px-4 py-2 rounded-lg" type="text" name="title" placeholder="Title" id="" />
                        <input className="border-1 w-1/3  px-4 py-2 rounded-lg" type="text" name="description" placeholder="description" id="" />
                    </div>

                    <div className="bg-gray-200  md:px-10  py-2">
                        <input className="border-1 w-1/2  px-4 py-2 rounded-lg" type="time" name="time" placeholder=" time" id="" />
                    </div>

                    <div className="bg-gray-200  pb-10 md:px-10 py-2">
                        <input className="border-1 w-1/2 pt-4 px-4 pb-20 rounded-lg" type="date" name="date" placeholder="Date" id="" />
                    </div>

                    <div className="bg-gray-200  pb-10 px-10 py-2">
                        <input className="btn btn-secondary w-1/2 mx-10" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;