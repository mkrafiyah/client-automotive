import { useEffect, useState } from "react";
import DisplayCard from "../Components/DisplayCard/DisplayCard";


const CarCard = () => {
    const [cars, setCars] = useState([]);
   
    useEffect(()=>{
        fetch('./cars.json')
        .then(res=>res.json())
        .then(data=>setCars(data.cars))
    },[])
    return (
        <>
        <h2 className="text-3xl font-bold text-center ">Featured <span className="text-sky-500">Brands</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
           {
            cars.map(car=> <DisplayCard key={car.id} car={car}></DisplayCard>)
           }
        </div>
        </>
    );
};

export default CarCard;