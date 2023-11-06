import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthConnect } from "../AUthProvider";
import swal from "sweetalert";



const Login = () => {
    const { Login } = useContext(AuthConnect)

    const location = useLocation()
    console.log(location);

    const Navigate = useNavigate()


    const HendelLOgin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);
        Login(email, password)
            .then(result => {
                console.log(result.user);
                swal("successfully Login!","Go To Home", "success");
                Navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error(error)
                swal("error", "password and email do not match!", "error")
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  ">
                    <div className="text-center  ">
                        <h1 className="text-5xl font-bold">Login Now</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={HendelLOgin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>
                            <div className="mt-4">
                                <p className="text-xl">Do not have an account? <Link to={'/registration'} className="text-primary">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;