import { useEffect, useState } from "react";
import Car from "../Car/Car";


const BestSeller = () => {
   const [carSeller, setCarSeller] = useState([]);
   console.log(carSeller)
    useEffect(()=>{
        fetch('./sellerCars.json')
        .then(res=>res.json())
        .then(data=>setCarSeller(data.cars))
    },[])
    return (
        <>
        <div className="bg-sky-400 p-6 mt-10">
        <h2 className="text-3xl text-sky-900 font-bold">BEST SELLER CARS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
             {
             carSeller.map(car=> <Car key={car.id} car={car}></Car>)
             }   
            
        </div>
        </>
    );
};

export default BestSeller;