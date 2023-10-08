import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'

const Navbar = () => {

    const navLinks = <div className='font-bold grid gap-1 lg:gap-4 lg:flex'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
    </div>

    return (
        <>
            <div className="navbar bg-primary-white">
                <div className="navbar-start">
                    <img src={Logo} className='btn btn-ghost' alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn btn-secondary max-lg:hidden normal-case font-bold">Log in</a>
                    <div className="dropdown">
                        <div className="drawer lg:hidden z-50">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="btn btn-secondary drawer-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-[70%] md:w-80 min-h-full bg-base-200 text-base-content">
                                    {navLinks}
                                    <a className="btn btn-secondary normal-case font-bold">Log in</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;