

const CarDetail = (carDetail) => {
    // const { _id, photo, name, brand, carType } = carDetail;
    console.log( carDetail)

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={carDetail.carDetail.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {carDetail.carDetail.name}
                        <div className="badge badge-secondary">Car</div>
                    </h2>
                    <p>{carDetail.carDetail.brand}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{carDetail.carDetail.price}</div>
                        <div className="badge badge-outline">{carDetail.carDetail.rating}</div>
                    </div>
                    <button className="btn bg-sky-400">Details</button>
                    <button className="btn bg-sky-800 text-white">Update</button>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;