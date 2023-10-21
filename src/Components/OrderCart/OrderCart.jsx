import Swal from "sweetalert2";


const OrderCart = ({ order, ordersInCart, setOrdersInCart }) => {

    const handleDelete = _id =>{
       console.log(order._id)

       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        fetch(`https://server-automotive-767z1pxoo-mahbubas-projects.vercel.app/order/${order._id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your car has been deleted.',
                    'success'
                  ) 
                  const remaining = ordersInCart.filter(deleteId=>deleteId._id !== _id)
                  setOrdersInCart(remaining)
            }
        })
        }
      })
    }
    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={order.photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{order.name}</h2>
                    <p>{order.description}</p>
                    <p className="font-bold">Price: {order.price}</p>
                    <p className="font-bold">Rating: {order.rating}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleDelete(order._id)} className="btn bg-sky-500">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCart;