import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

const Review = () => {
    useEffect(()=>{
        Aos.init()
    }, [])
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mb-10 mt-10">Happy <span className="text-sky-600">Customer</span></h2>
            {/* review 1 */}
            <div data-aos="flip-down" className="bg-sky-400 w-full flex mx-auto items-center justify-center mb-5">
                <div className="p-5 m-6">

                    <div>
                        <img className="mx-auto rounded-full w-24 h-24 " src="https://i.ibb.co/C6nKXMw/c-1.jpg" />
                    </div>


                <div className="text-center">
                        <p className="text-xl text-white">Behavior and other services are very good. The support has served me immediately and solved my problems when I need help are to be congratulated.</p>
                        <h3 className="text-2xl font-bold text-sky-900 mt-3">Andrea Otella</h3>
                    </div>
                </div>
            </div>
             {/* review 2 */}
            <div data-aos="flip-down" className="bg-sky-400 w-full flex mx-auto items-center justify-center">
                <div className="p-5 m-6">

                    <div>
                        <img className="mx-auto rounded-full w-24 h-24 " src="https://i.ibb.co/k9PMXs0/c-2.jpg" />
                    </div>


                <div className="text-center">
                        <p className="text-xl text-white">Support and response has been amazing, helping me with several issues I came across and got them solved almost the same day. A pleasure to work with them!</p>
                        <h3 className="text-2xl font-bold text-sky-900 mt-3">Smith Andreu</h3>
                    </div>
                </div>
            </div>
            
            
        </div>
       


    );
};

export default Review;