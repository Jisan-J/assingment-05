import logo from '../assets/logo-text.png'
import humberger from '../assets/hamburger.png'
export default function Nav() {
    return (
        <>

            <nav className='sticky top-0 z-50 flex justify-between container mx-auto items-center h-14 md:h-16 px-10 bg-white'>
                <img className='h-2 md:hidden' src={humberger} alt="" />
                <img className='h-5 md:h-5 lg:h-10' src={logo} alt="" />
                <ul className='hidden md:flex gap-2 md:gap-4'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="bg-white flex gap-1">
                    <button className="btn h-5 w-[container] md:h-6 text-[6px] md:text-[10px] lg:text-[16px] lg:h-10  rounded-4xl">Sing in</button>
                    <button className="btn h-5 lg:h-10 w-[container] md:h-6 text-[6px] md:text-[10px] lg:text-[16px] btn-active btn-secondary rounded-4xl">Sing up</button>
                </div>
            </nav>

        </>
    )
}