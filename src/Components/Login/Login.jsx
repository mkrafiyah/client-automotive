import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const Login = () => {
    const {user, signIn} = useContext(AuthContext);
    const [successLogin, setSuccessLogin] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
         e.preventDefault();
         const form = new FormData(e.currentTarget)
         const email = form.get("email");
         const password = form.get("password");
         console.log(email, password)

         setSuccessLogin('');
         setErrorLogin('');

         signIn(email, password)
         .then(result=>{
            setSuccessLogin('successful', result.user)
            navigate(location?.state ? location.state : '/')
            console.log(successLogin)
         })
         .catch(error=>{
            
            setErrorLogin(error.message);
         })
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-full m-4 md:w-1/2 rounded-xl bg-sky-200 p-5">
                    <div className="text-center lg:text-left p-3">
                        <h1 className="text-5xl font-bold text-sky-800">Login now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 p-3">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-sky-500 text-white">Login</button>
                            </div>
                            <p>Do not have an account? Go to <Link className="text-sky-600" to='/register'>Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>

            {
               successLogin &&  Swal.fire('Login SuccessFul!')
                
            }
            {
                errorLogin &&  <p>{errorLogin}</p>
            }
            <ToastContainer />
        </div>
    );
};

export default Login;