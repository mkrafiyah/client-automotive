import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import CarDetail from "../CarDetail/CarDetail";


const BrandDetails = () => {
    const [carsForBrand, setCarsForBrand] = useState([]);
    const params = useParams()
    useEffect(() => {
        fetch(` https://server-automotive-dub8js5he-mahbubas-projects.vercel.app/cars/${params.brand}`)
            .then(res => res.json())
            .then(data => setCarsForBrand(data))
    }, [])


  
    return (
        <>
            <div>
            <div className="carousel mx-7 w-[350px] md:w-[700px] lg:w-full h-[500px] mb-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/dgYXdqr/d-47.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold text-center">SPORTS CAR</h1>
                        <h2 className="mb-5 text-3xl font-bold text-center">Smart Interior</h2>
                        <p className="mb-5 text-2xl font-medium text-red-500">Coupe, Sedan, SUV, Pickup and man more..</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/H2Z5zTr/d-46.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold text-center">BODY PARTS</h1>
                        <h2 className="mb-5 text-3xl font-bold text-center">Limited Offer</h2>
                        <p className="mb-5 text-2xl font-medium">Coupe, Sedan, SUV, Pickup and man more..</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/xM0mfK3/d-45.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className="max-w-md text-red-800">
                        <h1 className="mb-5 text-5xl font-bold text-center">Deals of the Week</h1>
                        <h1 className="mb-5 text-3xl font-bold text-red-800 text-center">40% off</h1>
                        <p className="mb-5 text-2xl text-red-800 font-medium">Coupe, Sedan, SUV, Pickup and man more..</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/HGBLmmM/d-48.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold text-center">GET NOTIFIED OF ANY UPDATES!</h1>
                        <h2 className="mb-5 text-3xl text-center font-medium">Subscribe!!!</h2>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            </div>
            {/* display card */}
            <div className="grid ml-5 md:ml-20 lg:ml-0 grid-cols-1  lg:grid-cols-3 gap-7">
                {
                    carsForBrand.map(carDetail => <CarDetail key={carDetail._id} carDetail={carDetail}></CarDetail>)
                }
            </div>
        </>
    );
};

export default BrandDetails;