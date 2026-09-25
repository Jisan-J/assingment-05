import logo from '../assets/logo-text.png'


const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-100 text-base-content container mx-auto w-full p-10 flex flex-col justify-center my-10">
                <div className='flex justify-between mx-auto w-full'>
                    <aside className='flex flex-col gap-6'>
                        <img className='w-35' src={logo} alt="" />
                        <p className='text-gray-500'>
                            Curated tools, technologies, and resources for developers building
                           modern software.
                        </p>
                        <div className='font-bold text-gray-500 flex gap-2'>
                            <a href="">GitHub</a>
                            <a href="">Twitter</a>
                            <a href="">LinkedIn</a>
                        </div>
                    </aside>
                    <div className='flex justify-around w-[70%]'>
                        <nav className='flex flex-col text-gray-600'>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav className='flex flex-col text-gray-600'>
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav className='flex flex-col text-gray-600'>
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </div>
                </div>
                <div className="flex w-full flex-col">
                    <div className="divider"></div>
                    <div className='flex w-full justify-between text-gray-400'>
                        <p>© 2026 Dev Stack. All rights reserved.</p>
                        <span className='flex gap-2'>
                            <p>Privacy</p>
                            <p>Terms</p>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;