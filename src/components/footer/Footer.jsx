import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-primary-dark p-10 text-primary-white">
                <aside>
                    <img src={Logo} className='w-[200px]' alt="" />
                    <p>SOCIO EVENTS Management Industries Ltd.<br />Providing reliable tech since 1998 <br /> &copy; Copyright 2023</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">All Services</a>
                    <a className="link link-hover">Engagement Event</a>
                    <a className="link link-hover">Wedding Event</a>
                    <a className="link link-hover">Anniversaries Event</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;