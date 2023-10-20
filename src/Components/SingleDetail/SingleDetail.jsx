import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Swal from 'sweetalert2'


const SingleDetail = () => {
    const [detailCar, setDetailCar] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch(`https://server-automotive-dub8js5he-mahbubas-projects.vercel.app/carDetail/${params.id}`)
            .then(res => res.json())
            .then(data => setDetailCar(data))
    }, [])

    const handleAddToCart = () =>{
        const {photo, name, brand, carType,  price, description, rating} = detailCar;
        const newOrder = {photo, name, brand, carType,  price, description, rating}
        console.log(newOrder)

        //send data to the server
        fetch(' https://server-automotive-dub8js5he-mahbubas-projects.vercel.app/order',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    icon: 'Success!',
                    title: 'Success!',
                    text: 'Car added successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
    }
    
    return (
        <div className="mt-20">

            <div className="card  bg-base-100 shadow-xl mb-20 p-8">
                <figure><img src={detailCar.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {detailCar.brand}
                       
                        <div className="badge badge-secondary">{detailCar.carType}</div>
                    </h2>
                    <h2 className="font-bold"> {detailCar.name}</h2>
                    <p>{detailCar.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{detailCar.price}</div>
                        <div className="badge badge-outline">{detailCar.rating}</div>
                    </div>
                    <button onClick={handleAddToCart} className="btn bg-sky-400">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleDetail;