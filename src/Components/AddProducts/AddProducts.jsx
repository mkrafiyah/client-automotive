import Swal from 'sweetalert2'

const AddProducts = () => {

    const handleAddProducts = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const carType = form.carType.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        
        const newCar = {photo, name, brand, carType,  price, description, rating}
        console.log(newCar)

        //send data to the server

        fetch('https://server-automotive-767z1pxoo-mahbubas-projects.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res=>res.json())
        .then(data =>{
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
        <div>
            <h2 className="text-3xl text-sky-900 font-bold text-center mb-8 mt-8">Add A Products</h2>

            <form onSubmit={handleAddProducts} className="bg-sky-100 mb-20 p-24">
                {/* form name and Brand Name row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" placeholder="Car Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form carType and Price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Type</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="carType" placeholder="Car Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Short description and Rating row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>

                <input type="submit" value="Add" className="btn btn-block bg-sky-900 text-white" />
            </form>
        </div>
    );
};

export default AddProducts;