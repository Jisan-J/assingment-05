import heroImg from '../src/assets/banner-stack.png'
const HeroSection = () => {
    return (
        <div className=' md:flex items-center justify-between container mx-auto px-10 my-10 md:my-[-30px] md:h-[100vh] xl:h-[640px]'>
            <div className=' mx-auto flex flex-col gap-3'>
                <h1 className='text-center text-2xl md:text-3xl md:text-left xl:text-6xl lg:text-4xl font-bold'>Build Your Ideal <br /><span className=' bg-linear-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className='lg:text-md lg:max-w-[400px] text-[10px] text-center text-gray-500'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                    <div className="flex gap-2 justify-center md:justify-start">
                        <button className="btn text-white text-[8px] md:text-[10px] h-7 bg-linear-to-r from-amber-500 to-pink-500">Explore Technologies</button>
                        <button className="btn text-[8px] md:text-[10px] w-28 h-7">Learn More</button>
                    </div>
            </div>
            <div>
                <img src={heroImg} alt="Hero" />
            </div>
        </div>
    );
};

export default HeroSection;