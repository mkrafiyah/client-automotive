import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'
const Banner = () => {

    useEffect(()=>{
        Aos.init()
    }, [])
    return (
        <div className="mb-10">
            <div data-aos="fade-down-right" className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/SmrsLW1/banner-car.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div  data-aos="zoom-out-up" className="max-w-md">
                        <p className="uppercase mb-5 text-sky-600 text-4xl">Top brands</p>
                        <h1 className="mb-5 text-5xl uppercase font-bold">Modern-Classic</h1>
                        <p className="mb-5 uppercase text-xl">Get 30% off on selected items</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;