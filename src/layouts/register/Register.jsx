import Logo from '../../assets/logo.png'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [passErr, setPassErr] = useState('');
    const { emailPasswordUser, gmailUser, gitUser } = useContext(AuthContext);

    const handelRegister = (e) => {
        e.preventDefault();

        const from = new FormData(e.currentTarget);
        const name = from.get('name');
        const email = from.get('email');
        const password = from.get('password');
        if (password.length < 6) {
            setPassErr('Password is less then 6 characters.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPassErr('Password don\'t have a capital letter.')
            console.log(/[A-Z]/);
            return;
        }
        if (!/[@#$%^&+=]/.test(password)) {
            setPassErr('Password don\'t have a special character. ')
            return;
        }
        setPassErr('');
        emailPasswordUser(name, email, password);

    }

    return (
        <div>
            <div className="hero bg-primary-white">
                <div>
                    <img src={Logo} className='w-[250px] mx-auto ' alt="" />
                    <div className='hero-content gap-[10%] flex-col min-h-[750px] lg:flex-row-reverse'>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">We are always ready to give you a good service. We are committed to serving you.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handelRegister} className="card-body">
                                <div className="form-control">
                                    <label htmlFor='name' className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input id='name' name='name' type="text" placeholder="Full name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label htmlFor='email' className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input id='email' name='email' type="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label htmlFor='password' className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input id='password' name='password' type="password" placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                        <div className="text-base text-[red]">{passErr}</div>
                                    </label>
                                    <label className="label">
                                        <div className="text-base">Already have an account? <Link className='link link-hover font-bold' to='/login'>Log in.</Link> </div>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-secondary">Register Now</button>
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
        </div>
    );
};

export default Register;