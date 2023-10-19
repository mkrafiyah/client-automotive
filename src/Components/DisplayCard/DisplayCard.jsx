import { Link } from "react-router-dom";


const DisplayCard = ({car}) => {
    const {id, brand_image, brand} = car
    return (
        <div>
            <Link to={`/cars/${brand}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={brand_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {brand}
                        
                    </h2>
                    
                </div>
            </div>
            </Link>
        </div>
    );
};

export default DisplayCard;