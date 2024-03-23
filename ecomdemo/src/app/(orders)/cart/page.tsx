import { getOrders } from "@/lib/cart/order"

export default async function MyCart(){
    let orders = await getOrders();
    return(
        <div className="container">
            <h1>My Orders</h1>
            <ul className="list-group">
                {orders.map((order:any) => 
                <li className="list-group-item">
                    <h2>{order.name}</h2>
                    <p>Price: {order.price}</p>
                    <p>Quantity: {order.quantity}</p>
                    <p>Total: {order.total}</p>
                    <p>Status: {order.status}</p>
                </li>
                )}
            </ul>
        </div>
    )
}