'use client';

import { createOrder } from "@/lib/cart/order";
import { getProduct } from "@/lib/cart/products";

export default async function ProductDetails({ params }: { params: { id: string } }) {

    let product = await getProduct(params.id);
    console.log(product);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <p className="text-muted">{product.category}</p>
                    <p>{product.description}</p>
                    <h3>${product.price} <small className="text-success">{product.discountPercentage}% off</small></h3>
                    <p className="text-info">In stock: {product.stock}</p>
                    <div className="ratings mb-2">
                        <span className="badge badge-warning">{product.rating} ★</span>
                        <span className="ml-2">Brand: {product.brand}</span>
                    </div>
                    <button className="btn btn-primary me-2">Add to Cart</button>
                    <button className="btn btn-success" onClick={() => createOrder(params.id)}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}