import Logo from '../../assets/logo.png'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { logInUser, loginErr, gmailUser, gitUser, } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        logInUser(email, password);
    }


    return (
        <div>
            <div className="hero bg-primary-white">
                <div>
                    <img src={Logo} className='w-[250px] mx-auto ' alt="" />
                    <div className='hero-content gap-[10%] flex-col min-h-[750px] lg:flex-row-reverse'>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">We are always ready to give you a good service. We are committed to serving you.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">

                                <div className="form-control">
                                    <label htmlFor='email' className="label">
                                        <span className="label-text" required>Email</span>
                                    </label>
                                    <input id='email' name='email' type="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label htmlFor='password' className="label" required>
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input id='password' name='password' type="password" placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                        <div className="text-[red] ">{loginErr}</div>
                                    </label>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <div className="text-base">Don&#39;t have an account? <Link className='link link-hover font-bold' to='/register'>Register.</Link> </div>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-secondary">Log in</button>
                                </div>
                                <div className="divider">OR</div>
                                <div className='text-center'>
                                    <span className='text-center'>Continue with -</span>
                                    <div className='flex text-5xl justify-center mt-4 gap-5 mx-auto'>
                                        <FcGoogle onClick={gmailUser} className='rounded-full p-1 hover:bg-neutral-200 cursor-pointer'></FcGoogle> <FaGithub onClick={gitUser} className='rounded-full p-1 hover:bg-neutral-200 cursor-pointer'></FaGithub>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;