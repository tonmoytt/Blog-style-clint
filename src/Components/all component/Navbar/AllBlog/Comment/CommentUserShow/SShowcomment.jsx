import swal from 'sweetalert';
import img from './../../../../../../assets/img/uuuuuuuu.jpg'
import { Link } from 'react-router-dom';

const SShowcomment = ({data}) => {
    const {_id,name,comment}=data;





    const HendelUpdate = id => {
        console.log('click');
        fetch(`http://localhost:5000/comment/${id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status : 'confirm'})

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount >0){
                    // update status
                    swal("successful","Update sucessfully","success")
                }
            })

    }


    return (
        <div>
            <div className="border-2 p-4 " >
                <div className="flex">
                    <div>
                        <img className="h-12 w-12 mr-10" src={img} alt="" />
                    </div>
                    <div>
                        <p className="text-2xl font-serif font-bold">Your Name : {name}</p>
                        <p>Your comment : {comment}</p>
                    </div>

                </div>
               <Link to={`/updatecomment/${_id}`}> <button className="btn mt-10 w-full  btn-outline btn-warning">Update now</button></Link>

            </div>

        </div>
    );
};

export default SShowcomment;