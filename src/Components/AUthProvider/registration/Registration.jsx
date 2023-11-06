import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthConnect } from "../AUthProvider";
import swal from "sweetalert";


const Registration = () => {
    const { CreateUser, Google } = useContext(AuthConnect)

    const [password, setpassword] = useState('')

    const location = useLocation()
    console.log(location);
    const Navigate = useNavigate()


    const HendelSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const country = form.country.value
        const email = form.email.value
        const password = form.password.value
        const user = { name, country, email, password }
        console.log(user);


        setpassword('')
        if (password.length < 6) {
            setpassword('password should be at least 6 character')
        }
        else if (!/[0-9]/.test(password)) {
            setpassword('Please adding Number character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setpassword('Please adding at least 1 uppercase')
            return;

        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setpassword('Please adding at least one special character')
            return;
        }



        CreateUser(email, password)
            .then(result => {
                console.log(result.user);
                swal("successfully registred!", "please login", "success");
                Navigate(location?.state ? location.state : '/login')
            })
            .catch(error => {
                console.error(error)
                swal("error", "Please check & fully form fill up !", "error")
            })
    }

    const GoogleHendel = () => {
        Google()
            .then(result => {
                console.log(result.user);
                swal("Success!", "successfully registred with Google!", "success");

            })
            .catch(error => {
                console.error(error)
                swal("error", "Please  try again!", "error")
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  ">
                    <div className="text-center  ">
                        <h1 className="text-5xl font-bold">Registration Now</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={HendelSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input type="text" name="country" required placeholder="Your Country" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button > <input className="btn btn-primary w-full" type="submit" value="Submit" /></button>

                            </div>

                            <div>
                                <p className="text-xl mt-6 ">Already have an account? <Link to={'/login'} className="text-primary">Login</Link></p>
                            </div>

                            <div>
                                <button onClick={GoogleHendel} className="w-full btn btn-secondary mt-4 "><Link>Login in with Google</Link></button>
                            </div>
                        </form>
                    </div>
                    <div className='bg-red-200 rounded-base'>
                        {
                            password && <p className='mt-4 px-4 py-2 font-semibold text-2xl '> {password}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;