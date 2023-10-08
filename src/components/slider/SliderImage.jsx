// Slider images
import weddings from '../../assets/slides/weddings.jpg'
import birthday from '../../assets/slides/birthday.jpg'
import anniversaries from '../../assets/slides/Anniversaries.jpg'
import engagement from '../../assets/slides/engagement.jpeg'
import retirement from '../../assets/slides/retirement.jpg'
import baby from '../../assets/slides/baby.jpg'
import logo from '../../assets/logo.png'
import { TypeAnimation } from 'react-type-animation'



export const Weddings = <div className="hero h-full" style={{ backgroundImage: `url(${weddings})` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-primary-white">
        <div className="max-w-md">
            <div className='bg-[#ffffff66] rounded-lg'>
                <img src={logo} alt="logo" />
            </div>
            <h1 className="mb-5 text-5xl font-bold my-4">
                <TypeAnimation
                    sequence={['Wedding Moments', 500, 'Happy Wedding', 300]}
                    repeat={Infinity}
                    deletionSpeed={40}
                >
                </TypeAnimation>
            </h1>
            <p className="mb-5 text-lg">Your dream wedding made reality. Our wedding planning expertise ensures a flawless day filled with love and treasured memories.</p>
            <button className="btn btn-secondary">Get Started</button>
        </div>
    </div>
</div>
export const Birthday = <div className="hero h-full" style={{ backgroundImage: `url(${birthday})` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
            <div className='bg-[#ffffff66] rounded-lg'>
                <img src={logo} alt="logo" />
            </div>
            <h1 className="mb-5 text-5xl font-bold my-4">
                <TypeAnimation
                    sequence={['Birthday Party', 500, 'Happy Birthday', 300]}
                    repeat={Infinity}
                    deletionSpeed={40}
                >
                </TypeAnimation>
            </h1>
            <p className="mb-5 text-lg">Make birthdays extraordinary. Our expert birthday party planning takes care of every detail, ensuring a day filled with joy and unforgettable memories.</p>
            <button className="btn btn-secondary">Get Started</button>
        </div>
    </div>
</div>
export const Anniversaries = <div className="hero h-full" style={{ backgroundImage: `url(${anniversaries})` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
            <div className='bg-[#ffffff66] rounded-lg'>
                <img src={logo} alt="logo" />
            </div>
            <h1 className="mb-5 text-5xl font-bold my-4">
                <TypeAnimation
                    sequence={['Anniversary Party', 500, 'Happy Anniversary', 300]}
                    repeat={Infinity}
                    deletionSpeed={40}
                >
                </TypeAnimation>
            </h1>
            <p className="mb-5 text-lg">Celebrate your love story effortlessly. Our anniversary event planning ensures a memorable day, allowing you to focus on each other. Trust us to create cherished moments.</p>
            <button className="btn btn-secondary">Get Started</button>
        </div>
    </div>
</div>
export const Engagement = <div className="hero h-full" style={{ backgroundImage: `url(${engagement})` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
            <div className='bg-[#ffffff66] rounded-lg'>
                <img src={logo} alt="logo" />
            </div>
            <h1 className="mb-5 text-5xl font-bold my-4">
                <TypeAnimation
                    sequence={['Engagement Party', 500, 'Happy Engagement', 300]}
                    repeat={Infinity}
                    deletionSpeed={40}
                >
                </TypeAnimation>
            </h1>
            <p className="mb-5 text-lg">Begin your journey with perfection. Our engagement planning creates magical moments, allowing you to savor your love.</p>
            <button className="btn btn-secondary">Get Started</button>
        </div>
    </div>
</div>
export const Retirement = <div className="hero h-full my-4" style={{ backgroundImage: `url(${retirement})` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
            <div className='bg-[#ffffff66] rounded-lg'>
                <img src={logo} alt="logo" />
            </div>
            <h1 className="mb-5 text-5xl font-bold my-4">
                <TypeAnimation
                    sequence={['Retirement Party', 500, 'Happy Retirement', 300]}
                    repeat={Infinity}
                    deletionSpeed={40}
                >
                </TypeAnimation>
            </h1>
            <p className="mb-5 text-lg">Embrace retirement worry-free. We plan retirement parties that reflect your achievements, ensuring a seamless transition to a new chapter in life.</p>
            <button className="btn btn-secondary">Get Started</button>
        </div>
    </div>
</div>
export const Baby = <div className="hero h-full" style={{ backgroundImage: `url(${baby})` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
            <div className='bg-[#ffffff66] rounded-lg'>
                <img src={logo} alt="logo" />
            </div>
            <h1 className="mb-5 text-5xl font-bold my-4">
                <TypeAnimation
                    sequence={['Baby Shower Party', 500, 'Happy Baby Shower', 300]}
                    repeat={Infinity}
                    deletionSpeed={40}
                >
                </TypeAnimation>
            </h1>
            <p className="mb-5 text-lg">Welcome new life with ease. Our baby shower management guarantees a delightful celebration, leaving you stress-free to enjoy this special time.</p>
            <button className="btn btn-secondary">Get Started</button>
        </div>
    </div>
</div>
