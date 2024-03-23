'use server';

import { redirect } from "next/navigation";
import { getSession } from "../auth/signin";
import { http } from "../common/http";
import { getProduct } from "./products";

export async function createOrder(id:string){
    let session = await getSession();
    let product = await getProduct(id);

    let order = {
        user: session.id,
        product: product.id,
        quantity: 1,
        price: product.price,
        total: product.price,
        status: "pending",
        name: product.title,
        date : new Date()
    }

    await http.post("/orders", order);

    redirect("/cart");
}

export async function getOrders(){
    let session = await getSession();
    let orders = await http.get(`/orders?user=${session.id}`);
    return orders;
}