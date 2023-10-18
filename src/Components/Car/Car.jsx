

const Car = ({car}) => {
    console.log(car)
    return (
        <div>
            <div className="card  h-96 bg-sky-100 shadow-xl">
  <figure><img className="w-full" src={car.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {car.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="text- font-bold">{car.price}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline badge-secondary">{car.year}</div> 
      <div className="badge badge-outline badge-secondary">{car.speed}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Car;