import swal from "sweetalert";


const NewsLetter = () => {
    const Newshendel=event=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        console.log(email);
   
    }
    const newshendel = () => {
        if(email){
          return  swal.fire("email");
            
            
        }
        // else{
        //     swal("error", "please valid charecter", "error");
        // }
       
    }
    return (
        <div className="   bg-green-300">
            <div className="p-6 gap-6 items-center justify-between">


                <p className="text-3xl text-center mb-6 ">Newslitter</p>
                <form onSubmit={Newshendel} >
                <div className="flex text-center gap-2">
                    <input type="email" name="email"  className="border-2 w-full px-4  " placeholder="Enter your Email" required />
                    <button className="btn btn-secondary"  onClick={newshendel}><input type="submit" value="Submit" /></button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;