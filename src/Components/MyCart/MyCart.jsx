import { useLoaderData } from "react-router-dom";
import OrderCart from "../OrderCart/OrderCart";
import { useState } from "react";


const MyCart = () => {
    const loadedOrdersInCart = useLoaderData([]);
    const [ordersInCart, setOrdersInCart] = useState(loadedOrdersInCart);
    console.log(ordersInCart)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-10 mx-5">
            {
                ordersInCart.map(order=> <OrderCart key={order._id} order={order}
                    ordersInCart={ordersInCart}
                    setOrdersInCart={setOrdersInCart}
                ></OrderCart>)
            }
        </div>
    );
};

export default MyCart;